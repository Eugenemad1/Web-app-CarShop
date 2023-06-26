const ApiError = require('../error/ApiError')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const {Worker} = require('../models/models')

const generateJwt = (id, email, login, role) => {
    return jwt.sign(
        {id, email, login, role}, 
        process.env.SECRET_KEY,
        {expiresIn: '24h'}
        )
}

class UserController {
    async registration(req, res) {
        const {login, password, email, role} = req.body
        // if (!login || !password) {
        //     return next(ApiError.badRequest('Некорректный login или password'))
        // }
        // const candidate = await User.findOne({where: email})
        // if (candidate) {
        //     return next(ApiError.badRequest('Такой email уже зарегистрирован'))
        // }
        const hashPassword = await bcrypt.hash(password, 5)
        const worker = await Worker.create({login, email, role, password: hashPassword})
        const token = generateJwt(worker.id, worker.email, worker.login, worker.role)
        return res.json({token})
    }

    async login(req, res, next) {
        const {login, password} = req.body
        const worker = await Worker.findOne({where: {login}})
        if (!worker) {
            return next(ApiError.internal('Работник с таким логином не найден'))
        }
        let comparePassword = bcrypt.compareSync(password, worker.password)
        if (!comparePassword) {
            return next(ApiError.internal('Указан неверный пароль'))
        }
        const token = generateJwt(worker.id, worker.email, worker.login, worker.role)
        return res.json({token})
    }

    async check(req, res, next) {
        const token = generateJwt(req.worker.id, req.worker.email, req.worker.login, req.worker.role)
        res.json({token})
    }

    async getAll(req, res, next) {
        const workers = await Worker.findAll()
        return res.json(workers)
    }
}

module.exports = new UserController()