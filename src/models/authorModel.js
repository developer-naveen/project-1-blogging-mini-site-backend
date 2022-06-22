const mongoose = require('mongoose');

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
    required: 'Email address is required',
    validate: [validateEmail, 'Please fill a valid email address'],
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
  },
  password: {
    type: String,
    require: true
  }
},
  { timestamps: true });


//function for validate email
  var validateEmail = function(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};



// const validateEmail = (email) => {
//             return String(email)
//               .toLowerCase()
//               .match(
//                 /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
//               );
//           };
module.exports = mongoose.model('Author', authorSchema)