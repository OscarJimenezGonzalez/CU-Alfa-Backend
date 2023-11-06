const SupplierOffer = require('../models/supplierOffer.model')
const SupplierCompany = require('../models/supplierCompany.model')
const SupplierContractType = require('../models/supplierContractType.model')
const User = require('../models/user.model')
const Community = require('../models/community.model')


const getAllSupplierOffers = async (req, res) => {
    try {

        const supplierOffer = await SupplierOffer.findAll({ where: req.query })

        if (!supplierOffer) {

            return res.status(404).json('No supplier offers found')

        }

        return res.status(200).json(supplierOffer)

    } catch (error) {

        return res.status(500).json(error.message)

    }

}

const getOwnSupplierOffers = async (req, res) => {
    // Este controlador va a ser capaz de traernos las ofertas vacías con los datos de licitación (m2) 
    // por medio de un eager loading. Ocultando en todo momento la identidad de la comunidad. 

    try {

        const userId = res.locals.user.id
        const user = await User.findByPk(userId)

        if (!user) {

            return res.status(404).json('No user found')

        }

        let companyIdd = req.params.companyId
        companyIdd--; // para poder acceder a nuestra empresa por params y que los valores sean
        // iguales que en los indices de nuestra lista de empresas. 

        const company = await user.getSupplier_Companies()  // este método nos trae una lista de las empresas asociadas a nuestro user. 

        if (!company) {

            return res.status(404).json('Company not found')

        }

        const supplierOffer = await company[companyIdd].getSupplier_Offers({

            attributes: { exclude: ['SupplierContractTypeId', 'SupplierCompanyId', 'CommunityId'] },

            include: [{
                model: SupplierCompany,
                attributes: ['name']
            },
            {
                model: SupplierContractType,
                attributes: ['name']
            },
            {
                model: Community,
                attributes: ['community_surface']
            }],


        })  // con este metodo accedemos a una de las empresas, que viene especificada 
        // por req.params.companyId en la petición 
        // además nos traemos el dato de la superficie como nuestra información de licitación. 
        // y limpiamos un poco algunos campos para que traiga la información necesaria.

        if (!supplierOffer) {

            return res.status(404).json('No supplier offer found')

        }

        return res.status(200).json(supplierOffer)

    } catch (error) {

        return res.status(500).json(error.message)

    }

}

const updateSupplierOffer = async (req, res) => {
    try {

        const supplierOfferId = req.params.supplierOfferId
        const supplierOffer = await SupplierOffer.update(req.body, { where: { id: supplierOfferId } })

        if (supplierOffer > 0) {

            return res.status(200).json('Supplier offer updated.')

        }

        return res.status(404).json('No supplier offer found')

    } catch (error) {

        return res.status(500).json(error.message)

    }

}

const updateOwnSupplierOffers = async (req, res) => {
    // En este controlador ofertaremos como proveedor, ya que en el caso de nuestra API
    // Las ofertas (vacías) se crean automáticamente, y el proveedor mediante este controlador
    // Actualiza las ofertas que le correspondan con sus precios procediendo asi a licitar.
    // Este controlador solo es accesible para usuarios premium.
    // Una vez que el supplier introduzca un precio de licitación el campo hired de la oferta
    // se convertirá en true automaticamente. 

    try {

        const userId = res.locals.user.id
        const user = await User.findByPk(userId)

        if (!user) {

            return res.status(404).json('No user found')

        }

        let companyIdd = req.params.companyId
        companyIdd--; // para poder acceder a nuestra empresa por params y que los valores sean
        // iguales que en los indices de nuestra lista de empresas. 

        const company = await user.getSupplier_Companies()  // este método nos trae una lista de las empresas asociadas a nuestro user. 
        if (!company) {

            return res.status(404).json('Company not found')

        }

        const supplierOfferIdd = req.params.supplierOfferId;
        const supplierOffer = await SupplierOffer.findByPk(supplierOfferIdd)

        if (!supplierOffer) {

            return res.status(404).json('Supplier Offer not found')

        }

        const isSupplierOfferAsociatedToCompany = await company[companyIdd].hasSupplier_Offer(supplierOffer)

        if (!isSupplierOfferAsociatedToCompany) {
            return res.status(404).json('Offer not associated to Company.')
        }

        const offerUpdated = await supplierOffer.update(req.body,{where: {offered: true}})

        console.log(offerUpdated)

        if (offerUpdated) {


            const {id, quantity_offered, offered, hired} = offerUpdated
            
            return res.status(200).json({

                message: 'You have made your offer successfully.',
                offerData: {

                    id,
                    quantity_offered,
                    offered,
                    hired

                }

            })
        }

        return res.status(404).json('Offer wasnt updated')


    } catch (error) {

        return res.status(500).json(error.message)

    }

}

const generateCommunityLicitation = async (req, res) => {

    // Este controlador deberá ser capaz de generar ofertas vacías con las comunidades que requieren ofertas de proveedor
    // Es decir aquellas cuyos contratos no están en el top 5 de precios del mercado.  

}

const createSupplierOffer = async (req, res) => {

// Debe existir un tope aqui que limite que exista solo una oferta por tipo de contrato
// por empresa por comunidad. De forma que una comunidad no tenga dos ofertas del mismo 
// tipo de contrato por parte de una misma empresa. 

    try {

        const supplierOffer = await SupplierOffer.create(req.body)
        return res.status(200).json(supplierOffer)

    } catch (error) {

        return res.status(500).json(error.message)

    }

}



const deleteSupplierOffer = async (req, res) => {

    try {

        const supplierOfferId = req.params.supplierOfferId
        const supplierOffer = await SupplierOffer.destroy({ where: { id: supplierOfferId } })

        if (!supplierOffer) {

            return res.status(404).json('Supplier offer not found')

        }

        return res.status(200).json('Supplier offer deleted.')

    } catch (error) {

        return res.status(500).json(error.message)

    }

}



module.exports = { getAllSupplierOffers, getOwnSupplierOffers, updateOwnSupplierOffers, updateSupplierOffer, createSupplierOffer, deleteSupplierOffer }