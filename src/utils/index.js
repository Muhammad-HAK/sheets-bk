const mongoose = require('mongoose');
const JWT = require('jsonwebtoken');

const stringToMongoObj = (input) => {
    return mongoose.Types.ObjectId(input);
}

const isObjectId = (id) => {
    return mongoose.isValidObjectId(id);
}

const ValidateEmail = (email) => {
  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  return emailRegex.test(email)
}

const generateToken = (id) => {
    return JWT.sign(
        {id},
        process.env.JWT_SECRET,
        {expiresIn: '10d'}
    )
}

module.exports = {
    stringToMongoObj,
    isObjectId,
    ValidateEmail,
    generateToken
}