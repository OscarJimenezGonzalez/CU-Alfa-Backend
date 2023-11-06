const router = require('express').Router()
const { getAllSupplierCompanies,
    getOwnSupplierCompanies,
    updateOwnSupplierCompanies,
    updateSupplierCompany,
    createOwnSupplierCompany,
    createSupplierCompany,
    deleteOwnSupplierCompanies,
    deleteSupplierCompany } = require('../controllers/supplierCompany.controller')


const { checkAdmin } = require('../utils/authorization.utils')

router.get('/own/', getOwnSupplierCompanies)
router.get('/', checkAdmin, getAllSupplierCompanies)
router.put('/own/:supplierCompanyId', updateOwnSupplierCompanies)
router.put('/:supplierCompanyId', checkAdmin, updateSupplierCompany)
router.post('/own', createOwnSupplierCompany)
router.post('/', checkAdmin, createSupplierCompany)
router.delete('/own/:supplierCompanyId', deleteOwnSupplierCompanies)
router.delete('/:supplierCompanyId', checkAdmin, deleteSupplierCompany)

module.exports = router; 