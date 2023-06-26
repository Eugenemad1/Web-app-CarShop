const Router = require('express')
const workerController = require('../controllers/workerController')
const router = new Router()
const authMiddleware = require('../middleware/authMiddleware')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/registration', workerController.registration)
router.post('/login', workerController.login)
router.get('/auth', authMiddleware, workerController.check)
router.get('/', checkRole(['Manager', 'ADMIN']), workerController.getAll)

module.exports=router