const router = require('express').Router()
const {

    getAllSupplierOffers,
    getOwnSupplierOffers,
    updateOwnSupplierOffers,
    updateSupplierOffer,
    createSupplierOffer,
    deleteSupplierOffer


} = require('../controllers/supplierOffer.controller')

const { checkAdmin } = require('../utils/authorization.utils')

router.get('/own/:companyId', getOwnSupplierOffers)
router.get('/', checkAdmin, getAllSupplierOffers)
router.put('/own/:companyId/:supplierOfferId', updateOwnSupplierOffers)
router.put('/:supplierOfferId', checkAdmin, updateSupplierOffer)
router.post('/', checkAdmin, createSupplierOffer)
router.delete('/:supplierOfferId', checkAdmin, deleteSupplierOffer)


module.exports = router