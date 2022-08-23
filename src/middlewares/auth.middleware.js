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
        res.status(401).json({error: true, status: 401, message: 'Authentication denied!'})
    }
    if (!token) {
        console.log('Not token, no authorization.')
        res.status(401).json({error: true, status: 401, message: 'Request token missing!'})
    }
}

module.exports = {
    protect
}