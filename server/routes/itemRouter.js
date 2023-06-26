const Router = require('express')
const router = new Router()
const itemController = require('../controllers/itemController')
const checkRole = require('../middleware/checkRoleMiddleware')


router.post('/', checkRole(['Manager', 'ADMIN']), itemController.create)
router.get('/', checkRole(['Manager', 'ADMIN']), itemController.getAll)
router.get('/:id', checkRole(['Manager', 'ADMIN']), itemController.getOne)
router.delete('/', checkRole(['Manager', 'ADMIN']), itemController.delete)
router.put('/', checkRole(['Manager', 'ADMIN']), itemController.changeStatus)
router.post('/status', checkRole(['Manager', 'ADMIN']), itemController.getByStatus)
router.post('/order', checkRole(['Manager', 'ADMIN']), itemController.createZakaz)
router.get('/order/get', checkRole(['Manager', 'ADMIN']), itemController.getAllZakaz)

module.exports=router









