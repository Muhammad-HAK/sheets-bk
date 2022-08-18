const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Header = new Schema({
  title: {type: String, required: true},
  type: {type: String, required: true} 
});

const Sheet = new Schema({
  creatorId: {type: mongoose.Types.ObjectId, required: true},
  name: {type: String, required: true},
  header: [Header],
  data: [Object],
  members: [mongoose.Types.ObjectId],
},
{
  timestamps: true
});

module.exports = mongoose.model('sheets', Sheet );