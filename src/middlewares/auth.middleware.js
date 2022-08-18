const JWT = require('jsonwebtoken')
const { UsersService } = require('../services')

const protect = async (req, res, next) => {
    let token
    try {
        const authExist = req.headers.authorization && req.headers.authorization.startsWith('Bearer');
        if (authExist) {
            token = req.headers.authorization.split(' ')[1];
            const decode = JWT.verify(token, process.env.JWT_SECRET)
            const user = await UsersService.getUserById(decode.id)
            delete user.password
            req.user = user
            next()
        }
    } catch (e) {
        console.log(e.message)
        res.sendStatus(401) && next(error)
    }
    if (!token) {
        console.log('Not token, no authorization.')
        res.sendStatus(401) && next(error)
    }
}

module.exports = {
    protect
}