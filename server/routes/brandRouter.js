const Router = require('express')
const router = new Router()
const brandController = require('../controllers/brandController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/', checkRole(['Manager', 'ADMIN']), brandController.create)
router.get('/', checkRole(['Manager', 'ADMIN']), brandController.getAll)

module.exports = router