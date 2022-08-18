const { UsersDb } = require('../db')

const createUser = async (user) => {
  try {
    return await UsersDb.createUser(user)
  } catch(e) {
    throw new Error(e.message)
  }
}
const updateUser = async (id, user) => {
  try {
    return await UsersDb.updateUser(id, user)
  } catch(e) {
    throw new Error(e.message)
  }
}
const deleteUser = async (userId) => {
  try {
    return await UsersDb.deleteUser(userId)
  } catch(e) {
    throw new Error(e.message)
  }
}
const getUserById = async (userId) => {
  try {
    return await UsersDb.getUserById(userId)
  } catch(e) {
    throw new Error(e.message)
  }
}
const getUserByEmail = async (email) => {
  try {
    return await UsersDb.getUserByEmail(email)
  } catch(e) {
    throw new Error(e.message)
  }
}
const getUsers = async () => {
  try {
    return await UsersDb.getUsers()
  } catch(e) {
    throw new Error(e.message)
  }
}

module.exports = {
  getUsers,
  getUserById,
  getUserByEmail,
  createUser,
  updateUser,
  deleteUser,
}