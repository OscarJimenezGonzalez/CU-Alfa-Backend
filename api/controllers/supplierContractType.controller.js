const SupplierContractType = require('../models/supplierContractType.model')


const getAllSupplierContractTypes = async (req, res) => {

    try {
        const supplierContractType = await SupplierContractType.findAll({ where: req.query })

        if (!supplierContractType) {

            return res.status(404).json('Supplier contract types not found')

        }

        return res.status(200).json(supplierContractType)

    }
    catch (error) {

        return res.status(500).json(error.message)

    }

}

const updateSupplierContractType = async (req, res) => {

    try {
        const supplierContractType = await SupplierContractType.update(req.body, { where: { id: req.params.supContractTypeId } })

        if (supplierContractType > 0) {

            return res.status(200).json('Supplier contract type updated')

        }
        return res.status(404).json('Supplier contract types not found')
    }
    catch (error) {

        return res.status(500).json(error.message)

    }


}

const createSupplierContractType = async (req, res) => {

    try {

        const supplierContractType = await SupplierContractType.create(req.body)
        return res.status(200).json(supplierContractType)

    }
    catch (error) {

        return res.status(500).json(error.message)

    }

}

const deleteSupplierContractType = async (req, res) => {

    try {
        const supplierContractType = await SupplierContractType.destroy({
            where: {
                id: req.params.supContractTypeId
            }
        })

        if (!supplierContractType) {

            return res.status(404).json('Supplier contract types not found')

        }

        return res.status(200).json('Supplier contract type deleted')

    }

    catch (error) {

        return res.status(500).json(error.message)

    }

}


module.exports = { getAllSupplierContractTypes, updateSupplierContractType, createSupplierContractType, deleteSupplierContractType }