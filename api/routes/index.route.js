const router = require('express').Router()
const authenticationRouter = require('./authentication.route')
const userRouter = require('./user.route')
const communityRouter = require('./community.route')

const {checkAuthorization } = require('../utils/authorization.utils')

router.use('/auth', authenticationRouter)
router.use('/user', checkAuthorization, userRouter)
router.use('/community', checkAuthorization, communityRouter)

module.exports = router

