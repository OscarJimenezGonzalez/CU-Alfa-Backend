const router = require('express').Router()
const {createOwnCommunity, createOneCommunity, getAllCommunities} = require('../controllers/community.controller')
const {checkAdmin} = require('../utils/authorization.utils')

router.get('/own', getAllCommunities)
router.get('/', checkAdmin, getAllCommunities)
router.post('/own', createOwnCommunity)
router.post('/', checkAdmin, createOneCommunity)


module.exports = router; 