const Router = require('express')
const router = new Router()
const workerRouter = require('./workerRouter')
const brandRouter = require('./brandRouter')
const customerRouter = require('./customerRouter')
const itemRouter = require('./itemRouter')
const modelRouter = require('./modelRouter')
const typeRouter = require('./typeRouter')

router.use('/user', workerRouter)
router.use('/type', typeRouter)
router.use('/brand', brandRouter)
router.use('/item', itemRouter)
router.use('/customer', customerRouter)
router.use('/model', modelRouter)

module.exports=router





