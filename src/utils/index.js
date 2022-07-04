const mongoose = require('mongoose');

const stringToMongoObj = (input) => {
    return mongoose.Types.ObjectId(input);
}

const isObjectId = (id) => {
    return mongoose.isValidObjectId(id);
}

module.exports = {
    stringToMongoObj,
    isObjectId
}