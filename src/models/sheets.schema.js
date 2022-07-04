const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Header = new Schema({
  title: {type: String, required: true},
  type: {type: String, required: true} 
});

const Sheet = new Schema({
  name: {type: String, required: true},
  header: [Header],
  data: [Object],
},
{
  timestamps: true
});

module.exports = mongoose.model('sheets', Sheet );