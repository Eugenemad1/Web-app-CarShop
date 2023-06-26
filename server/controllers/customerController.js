const { Customer } = require("../models/models")

class CustomerController {
    async create(req, res) {
        const {name, surname, date_of_birth, phone_number, item_bought_id} = req.body
        const customer = await Customer.create({name, surname, date_of_birth, phone_number, item_bought_id})
        return res.json({customer})
    }

    async getAll(req, res) {
        const customers = await Customer.findAll()
        return res.json(customers)
    }

    async delete(req, res) {
        
    }
}

module.exports = new CustomerController()