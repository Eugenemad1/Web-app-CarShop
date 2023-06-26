const Router = require('express')
const router = new Router()
const typeController = require('../controllers/typeController')
const checkRole = require('../middleware/checkRoleMiddleware')
 
router.post('/', checkRole(['Manager', 'ADMIN']), typeController.create)
router.get('/', checkRole(['Manager', 'ADMIN']), typeController.getAll)
router.delete('/', checkRole(['Manager', 'ADMIN']), typeController.delete)

module.exports = router