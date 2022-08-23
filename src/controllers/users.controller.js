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
      res.status(500).json({error: true, status: 500, message: 'Error while fetching users!'})
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
      res.status(500).json({error: true, status: 500, message: 'Error while fetching user!'})
    }
  }

  const getUserByEmail = async (req, res, next) => {
    const email = req.query.email;
    try {
      const response = await UsersService.getUserByEmail(email)
      res.json(response)
      next()
    } catch(e) {
      console.log(e.message)
      res.status(500).json({error: true, status: 500, message: 'Error while fetching user!'})
    }
  }
  
  const login = async (req, res, next) => {
    const {email, password} = req.body
    try {
      // check if user exists
      const userExists = await UsersService.getUserByEmail(email)
      if (!userExists || !userExists._id) {
        const message = 'User with this email does not exist!';
        console.log(message)
        res.status(400).json({error: true, status: 400, message})
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
        const message = 'Wrong credentials!';
        console.log(message)
        res.status(400).json({error: true, status: 400, message})
        return
      }
      next()
    } catch(e) {
      console.log(e.message)
      res.status(500).json({error: true, status: 500, message: 'Error while login!'})
    }
  }

  const createUser = async (req, res, next) => {
    const {name, email, password} = req.body
    try {
      // validating data
      if (!name || !email || !password) {
        const message = 'Please enter all required details!';
        console.log(message)
        res.status(400).json({error: true, status: 400, message})
        return
      }
      if (!Utils.ValidateEmail(email)) {
        const message = 'Please enter a valid email!';
        console.log(message)
        res.status(400).json({error: true, status: 400, message})
        return
      }
      // checking if user already exists
      const userExists = await UsersService.getUserByEmail(email);
      if (userExists && userExists._id) {
        const message = 'User with this email already exists!'
        console.log(message)
        res.status(400).json({error: true, status: 400, message})
        return
      }
      // hashing password
      const salt = await BCRYPT.genSalt(10);
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
      res.status(500).json({error: true, status: 500, message: 'Error while creating user!'})
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
      res.status(500).json({error: true, status: 500, message: 'Error while updating user!'})
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
    res.status(500).json({error: true, status: 500, message: 'Error while deleting user!'})
  }
}

module.exports = {
    getUsers,
    getUserById,
    getUserByEmail,
    createUser,
    login,
    updateUser,
    deleteUser,
  }