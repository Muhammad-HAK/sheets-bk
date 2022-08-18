const JWT = require('jsonwebtoken')
const BCRYPT = require('bcryptjs')
const { UsersService } = require('../services')
const Utils = require('../utils/index')

const getUsers = async (req, res, next) => {
    try {
      const response = await UsersService.getUsers()
      res.json(response)
      next()
    } catch(e) {
      console.log(e.message)
      res.sendStatus(500) && next(error)
    }
  }
  
  const getUserById = async (req, res, next) => {
    const id = req.query.id;
    try {
      const response = await UsersService.getUserById(id)
      res.json(response)
      next()
    } catch(e) {
      console.log(e.message)
      res.sendStatus(500) && next(error)
    }
  }
  
  const login = async (req, res, next) => {
    const {email, password} = req.body
    try {
      // check if user exists
      const userExists = await UsersService.getUserByEmail(email)
      if (!userExists && !userExists._id) {
        console.log('User with this email does not exist!')
        res.sendStatus(500) && next(error)
        return
      }
      const user = await UsersService.getUserByEmail(email)
      const bCompare = await BCRYPT.compare(password, user.password)
      if (user && bCompare) {
        res.status(201).json({
          user: {
            _id: user._id,
            name: user.name,
            email: user.email,
            token: Utils.generateToken(user._id)
          }
        })
      } else {
        console.log('Wrong credentials!')
        res.sendStatus(500) && next(error)
        return
      }
      next()
    } catch(e) {
      console.log(e.message)
      res.sendStatus(500) && next(error)
    }
  }

  const createUser = async (req, res, next) => {
    const {name, email, password} = req.body
    try {
      // validating data
      if (!name || !email || !password) {
        console.log('Please enter all required details!')
        res.sendStatus(500) && next(error)
        return
      }
      if (!Utils.ValidateEmail(email)) {
        console.log('Please enter a valid email!')
        res.sendStatus(500) && next(error)
        return
      }
      // checking if user already exists
      const userExists = await UsersService.getUserByEmail(email);
      if (userExists && userExists._id) {
        console.log('User with this email already exists!')
        res.sendStatus(500) && next(error)
        return
      }
      // hashing password
      const salt = await BCRYPT.salt(10);
      const hashPassword = await BCRYPT.hash(password, salt);
      // creating the user
      const user = {
        name,
        email,
        password: hashPassword,
      }
      const response = await UsersService.createUser(user)
      res.status(201).json({
        user: {
          _id: response._id,
          name: response.name,
          email: response.email,
          token: Utils.generateToken(response._id)
        }
      })
      next()
    } catch(e) {
      console.log(e.message)
      res.sendStatus(500) && next(error)
    }
  }
  
  const updateUser = async (req, res, next) => {
    const id = req.query.id;
    const content = req.body;
    try {
      const response = await UsersService.updateUser(id, content)
      res.json(response)
      next()
    } catch(e) {
      console.log(e.message)
      res.sendStatus(500) && next(error)
    }
  }
  
  const deleteUser = async (req, res, next) => {
    const id = req.query.id;
  try {
    const response = await UsersService.deleteUser(id)
    res.json(response)
    next()
  } catch(e) {
    console.log(e.message)
    res.sendStatus(500) && next(error)
  }
}

module.exports = {
    getUsers,
    getUserById,
    createUser,
    login,
    updateUser,
    deleteUser,
  }