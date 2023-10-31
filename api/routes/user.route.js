const router = require('express').Router()
const {
    getAllUsers,
    getOneUser,
    getOwnProfile,
    createUser,
    updateUser,
    updateOwnProfile,
    updateOwnPassword,
    deleteUser,
    deleteOwnProfile } = require('../controllers/user.controller')



const {checkAdmin} = require('../utils/authorization.utils')

router.get('/own/profile', getOwnProfile)
router.get('/:userId', checkAdmin, getOneUser)
router.get('/', checkAdmin, getAllUsers)
router.post('/', checkAdmin, createUser)
router.put('/own/profile', updateOwnProfile)
router.put('/ownPassword', updateOwnPassword)
router.put('/:userId', checkAdmin, updateUser)
router.delete('/:userId', checkAdmin, deleteUser)
router.delete('/own/profile', deleteOwnProfile)


module.exports = router; 