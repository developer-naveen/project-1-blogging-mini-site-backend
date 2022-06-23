const mongoose = require('mongoose');
const { isEmail } = require('validator')

const authorSchema = new mongoose.Schema({
  fname: {
    type: String,
    require: true
  },
  lname: {
    type: String,
    require: true
  },
  title: {
    type: String,
    require: true,
    enum: ["Mr", "Mrs", "Miss"]
  },
  email: {
    type: String,
    trim: true,
    lowercase: true,
    unique: true,
    validate: [isEmail, 'invalid Email']
  },
  password: {
    type: String,
    require: true
  }
},
  { timestamps: true });


module.exports = mongoose.model('Author', authorSchema)