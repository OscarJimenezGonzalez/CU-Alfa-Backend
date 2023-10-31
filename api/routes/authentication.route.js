const router = require('express').Router()
const {signUp, logIn} = require('../controllers/authentication.controller')

router.post('/logIn', logIn)
router.post('/signUp', signUp)

module.exports = router