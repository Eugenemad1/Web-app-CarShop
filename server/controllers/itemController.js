const {Item, ItemInfo} = require('../models/models')
const ApiError = require('../error/ApiError')
const uuid = require('uuid')
const path = require('path')
const { Order } = require('../models/models')

class ItemController {
    async create(req, res, next) {
        try {
            let {name, price, status, brandId, modelId, typeId, info} = req.body
            const {img} = req.files
            let fileName = uuid.v4() + ".jpg"
            img.mv(path.resolve(__dirname, '..', 'static', fileName))
            const item = await Item.create({name, price, status, brandId, modelId, typeId, img: fileName})

            if (info) {
                info = JSON.parse(info)
                info.forEach(i =>
                    ItemInfo.create({
                        title: i.title,
                        description: i.description,
                        itemId: item.id
                    })
                )
            }
            
            //console.log(item)
            return res.json(item)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
        
    }

    async getAll(req, res) {
        let {brandId, typeId, limit, page} = req.query
        page = page || 1
        limit = limit || 9
        let offset = page * limit - limit
        let items
        // if(!brandId && !modelId && !typeId) {
        //     items = await Item.findAndCountAll({limit, offset})
        // }

        // if(brandId && !modelId && !typeId) {
        //     items = await Item.findAndCountAll({where: {brandId}, limit, offset})
        // }

        // if(!brandId && modelId && !typeId) {
        //     items = await Item.findAndCountAll({where: {modelId}, limit, offset})
        // }

        // if(!brandId && !modelId && typeId) {
        //     items = await Item.findAndCountAll({where: {typeId}, limit, offset})
        // }

        // if(brandId && modelId && !typeId) {
        //     items = await Item.findAndCountAll({where: {brandId, modelId}, limit, offset})
        // }

        // if(!brandId && modelId && typeId) {
        //     items = await Item.findAndCountAll({where: {modelId, typeId}, limit, offset})
        // }

        // if(brandId && !modelId && typeId) {
        //     items = await Item.findAndCountAll({where: {brandId, typeId}, limit, offset})
        // }

        // if(brandId && modelId && typeId) {
        //     items = await Item.findAndCountAll({where: {brandId, modelId, typeId}, limit, offset})
        // }
        if (!brandId && !typeId) {
            items = await Item.findAndCountAll({limit, offset})
        }
        if (brandId && !typeId) {
            items = await Item.findAndCountAll({where:{brandId}, limit, offset})
        }
        if (!brandId && typeId) {
            items = await Item.findAndCountAll({where:{typeId}, limit, offset})
        }
        if (brandId && typeId) {
            items = await Item.findAndCountAll({where:{typeId, brandId}, limit, offset})
        }
        return res.json(items)
    }

    async getOne(req, res) {
        const {id} = req.params
        const item = await Item.findOne(
            {
                where: {id},
                include: [{model: ItemInfo, as: 'info'}]
            },
        )
        return res.json(item)
    }

    async getByStatus(req, res) {
        const {status} = req.body
        const item = await Item.findAll({where: {status}})
        return res.json(item)
    }

    async delete(req, res) {
        const {id, name} = req.body
        if(id === undefined) {
            const items = await Item.destroy({where : {name}})
            return res.json(items)
        }
        else {
            const items = await Item.destroy({where : {id}})
            return res.json(items)
        }
    }

    async changeStatus(req, res) {
        const {id, status} = req.body
        const item = await Item.update(
            { status },
            { where : { id }}
        )
        return res.json(item)
    }

    async createZakaz(req, res) {
        const {date_of_order, name, customerId, brandId, modelId, typeId} = req.body
        const zakaz = await Order.create({date_of_order, name, customerId, brandId, modelId, typeId})
        return res.json(zakaz)
    }

    async getAllZakaz(req, res) {
        const zakazi = await Order.findAll()
        return res.json(zakazi)
    }


  //  async deleteById(req, res) {
  //      const {id} = req.body
  //      const items = await Item.destroy({where : {id}})
  //      return res.json(items)
  //  }
}

module.exports = new ItemController()