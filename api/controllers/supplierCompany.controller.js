const SupplierCompany = require('../models/supplierCompany.model')
const User = require('../models/user.model')


const getAllSupplierCompanies = async (req, res) => {
    try {

        const supplierCompany = await SupplierCompany.findAll({ where: req.query })

        if (!supplierCompany) {

            return res.status(404).json('No supplier company found')

        }

        return res.status(200).json(supplierCompany)

    } catch (error) {

        return res.status(500).json(error.message)

    }

}

const getOwnSupplierCompanies = async (req, res) => {

    try {

        const userId = res.locals.user.id
        const user = await User.findByPk(userId)

        if (!user) {

            return res.status(404).json('No user found')

        }

        const userCompany = await user.getSupplier_Companies({ where: req.query })

        if (!userCompany) {

            return res.status(404).json('No supplier company found')

        }

        return res.status(200).json(userCompany)

    } catch (error) {

        return res.status(500).json(error.message)

    }

}

const updateSupplierCompany = async (req, res) => {
    try {

        const supplierCompany = await SupplierCompany.update(req.body, { where: { id: req.params.supplierCompanyId } })

        if (supplierCompany > 0) {

            return res.status(200).json('Supplier company updated.')

        }

        return res.status(404).json('No supplier company found')


    } catch (error) {

        return res.status(500).json(error.message)

    }

}

const updateOwnSupplierCompanies = async (req, res) => {

    try {

        const userId = res.locals.user.id
        const user = await User.findByPk(userId)

        if (!user) {

            return res.status(404).json('No user found')

        }

        const companyId = req.params.supplierCompanyId
        const supplierCompany = await SupplierCompany.findByPk(companyId)

        if (!supplierCompany) {

            return res.status(404).json('No supplier company found')

        }

        const isCompanyAsociated = await user.hasSupplier_Company(supplierCompany)

        if (!isCompanyAsociated) {

            return res.status(404).json('No asociation found between user and supplierCompany')

        }

        const companyUpdated = await supplierCompany.update(req.body);
        return res.status(200).json({ companyData: companyUpdated, message: 'Your company has been Updated successfully' })

    } catch (error) {

        return res.status(500).json(error.message)

    }

}

const createSupplierCompany = async (req, res) => {
    try {

        const supplierCompany = await SupplierCompany.create(req.body)
        return res.status(200).json(supplierCompany)

    } catch (error) {

        return res.status(500).json(error.message)

    }

}

const createOwnSupplierCompany = async (req, res) => {
    try {

        const userId = res.locals.user.id
        const user = await User.findByPk(userId)

        if (!user) {

            return res.status(404).json('No user found')

        }

        if (res.locals.user.role !== 'supplier') {

            return res.status(401).json('User not authorized.')

        }

        const newSuplierCompany = await user.createSupplier_Company(req.body)
        return res.status(200).json(newSuplierCompany)

    } catch (error) {

        return res.status(500).json(error.message)

    }

}

const deleteSupplierCompany = async (req, res) => {

    try {

        const supplierCompany = await SupplierCompany.destroy({ where: { id: req.params.supplierCompanyId } })

        if (!supplierCompany) {

            return res.status(404).json('No supplier company found')

        }

        return res.status(200).json('Supplier company deleted.')

    } catch (error) {

        return res.status(500).json(error.message)

    }

}

const deleteOwnSupplierCompanies = async (req, res) => {

    try {

        const userId = res.locals.user.id
        const user = await User.findByPk(userId)

        if (!user) {

            return res.status(404).json('No user found')

        }

        const companyId = req.params.supplierCompanyId
        const supplierCompany = await SupplierCompany.findByPk(companyId)

        if (!supplierCompany) {

            return res.status(404).json('No supplier company found')

        }

        const isCompanyAsociated = await user.hasSupplier_Company(supplierCompany)

        if (!isCompanyAsociated) {

            return res.status(404).json('No asociation found between user and supplierCompany')

        }


        const companyDeleted = await supplierCompany.destroy(companyId);
        return res.status(200).json('Your company has been Deleted successfully')

    } catch (error) {

        return res.status(500).json(error.message)

    }
}


module.exports = { getAllSupplierCompanies, getOwnSupplierCompanies, updateOwnSupplierCompanies, updateSupplierCompany, createOwnSupplierCompany, createSupplierCompany, deleteOwnSupplierCompanies, deleteSupplierCompany }