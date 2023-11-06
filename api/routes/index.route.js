const router = require('express').Router()
const authenticationRouter = require('./authentication.route')
const userRouter = require('./user.route')
const communityRouter = require('./community.route')
const supplierContractType = require('./supplierContractType.route')
const supplierCompany = require('./supplierCompany.route')
const supplierOffer = require('./supplierOffer.route')


const { checkAuthentication, checkAdmin } = require('../utils/authorization.utils')

router.use('/auth', authenticationRouter)
router.use('/user', checkAuthentication, userRouter)
router.use('/community', checkAuthentication, communityRouter)
router.use('/supContractType', checkAuthentication, checkAdmin, supplierContractType)
router.use('/supplierCompany', checkAuthentication, supplierCompany)
router.use('/supplierOffer',checkAuthentication, supplierOffer)

module.exports = router

