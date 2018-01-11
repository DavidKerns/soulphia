const mongoose = require('mongoose');
var bcrypt = require('bcrypt');
require('../configs/database');
const Schema   = mongoose.Schema;
const ROLES    = require('./role-types');
const userSchema = new Schema({
  email      : {
    type: String,
    required: [true, 'Email  is required']
  },
  username   : {
    type: String,
    required: [true, 'A username is required']
  },
  password   : {
    type: String,
    required: [true, 'password is required']
  },
  personal   : String,
  image: {
    type: String, default: ''
  },
  classes: [{
    type: Schema.Types.ObjectId,
    ref: 'Class',
    "default": [],
    require: true
  }],
  role: {
    type: String,
     enum: ROLES,
     "default": 'guest',
      required: true
     },
     language: { type: String, required: true },
     bigThing: {
       type: String
     }
  });


const User = mongoose.model('User', userSchema);
module.exports = User;
