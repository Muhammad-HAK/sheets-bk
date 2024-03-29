const express = require('express')
const router = express.Router()
const { UsersController } = require('../controllers');
const { protect } = require('../middlewares/auth.middleware')

router.post('/login', UsersController.login)
router.post('/create', UsersController.createUser)
router.get('/get', protect, UsersController.getUsers)
router.get('/get-by-id', protect, UsersController.getUserById)
router.get('/get-by-email', protect, UsersController.getUserByEmail)
router.put('/update', protect, UsersController.updateUser)
router.delete('/delete', protect, UsersController.deleteUser)

module.exports = router