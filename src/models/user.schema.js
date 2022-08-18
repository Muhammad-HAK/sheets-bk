const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const User = new Schema({
  name: {type: String, required: true},
  email: {type: String, required: true, index: {unique: true, dropDups: true}},
  password: {type: String, required: true},
},
{
  timestamps: true
});

module.exports = mongoose.model('Users', User );