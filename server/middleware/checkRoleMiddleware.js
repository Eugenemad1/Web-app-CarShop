const jwt = require('jsonwebtoken')

module.exports = function(roles) {
    return function (req, res, next) {
        if (req.method === "OPTIONS") {
            next()
        }
        try {
            const token = req.headers.authorization.split(' ')[1] // Bearer asfasnfkajsfnjk
            if (!token) {
                return res.status(401).json({message: "Не авторизован"})
            }
            const decoded = jwt.verify(token, process.env.SECRET_KEY)
            //console.log(decoded)         
            const findedRole = roles.find(role => {
                return decoded.role === role
            })
            if (!findedRole) {
                return res.status(403).json({message: "Нет доступа"})
            }
            // roles.forEach(role => {
            //     if (decoded.role !== role) {
            //         return res.status(403).json({message: "Нет доступа"})
            //     }
            // })
            req.worker = decoded
            next()
        } catch (e) {
            res.status(401).json({message: "Не авторизован"})
        }
    }
};









