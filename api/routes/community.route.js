const router = require('express').Router()
const { getAllCommunities,
    getOwnCommunities,
    createOwnCommunity,
    createOneCommunity,
    updateOneCommunity,
    updateOwnCommunities,
    deleteOneCommunity,
    deleteOwnCommunities, 
    } = require('../controllers/community.controller')

const { checkAdmin } = require('../utils/authorization.utils')

router.get('/own', getOwnCommunities)
router.get('/', checkAdmin, getAllCommunities)
router.put('/own/:communityId', updateOwnCommunities)  
router.put('/:communityId', checkAdmin, updateOneCommunity)
router.post('/own', createOwnCommunity)
router.post('/', checkAdmin, createOneCommunity)
router.delete('/own/:communityId', deleteOwnCommunities)
router.delete('/:communityId', checkAdmin, deleteOneCommunity)



module.exports = router; 