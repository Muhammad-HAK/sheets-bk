const { UsersModel } = require('../models')
const Utils = require('../utils');

const createUser = async (user) => {
    const res = await UsersModel.create(user);
    return res;
}

const updateUser = async (userId, user) => {
    const isValid = Utils.isObjectId(userId);
    const targetId = isValid ? userId : Utils.stringToMongoObj(userId);
    return await UsersModel.findByIdAndUpdate(targetId, user);
}

const deleteUser = async (userId) => {
    const isValid = Utils.isObjectId(userId);
    const targetId = isValid ? userId : Utils.stringToMongoObj(userId);
    return await UsersModel.findByIdAndDelete(targetId);
}

const getUsers = async () => {
    return await UsersModel.find({});
}

const getUserById = async (userId) => {
    const isValid = Utils.isObjectId(userId);
    const targetId = isValid ? userId : Utils.stringToMongoObj(userId);
    return await UsersModel.findById(targetId);
}

const getUserByEmail = async (email) => {
    return await UsersModel.findOne({email});
}
  
  module.exports = {
    createUser,
    updateUser,
    deleteUser,
    getUsers,
    getUserById,
    getUserByEmail,
  }