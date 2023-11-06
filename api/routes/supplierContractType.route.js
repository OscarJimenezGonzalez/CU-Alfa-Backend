const router = require('express').Router()
const { getAllSupplierContractTypes, 
    updateSupplierContractType, 
    createSupplierContractType, 
    deleteSupplierContractType } = require('../controllers/supplierContractType.controller');

    router.get('/', getAllSupplierContractTypes)
    router.put('/:supContractTypeId', updateSupplierContractType)
    router.post('/', createSupplierContractType)
    router.delete('/:supContractTypeId', deleteSupplierContractType)

    module.exports = router;