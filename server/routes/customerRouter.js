const Router = require('express')
const router = new Router()
const customerController = require('../controllers/customerController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/', checkRole(['Manager', 'ADMIN']), customerController.create)
router.get('/', checkRole(['Manager', 'ADMIN']), customerController.getAll)

module.exports = router