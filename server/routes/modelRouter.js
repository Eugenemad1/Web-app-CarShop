const Router = require('express')
const router = new Router()
const modelController = require('../controllers/modelController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/', checkRole(['Manager', 'ADMIN']), modelController.create)
router.get('/', checkRole(['Manager', 'ADMIN']), modelController.getAll)
router.delete('/', checkRole(['Manager', 'ADMIN']), modelController.delete)

module.exports = router