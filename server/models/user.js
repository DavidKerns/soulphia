const mongoose = require('mongoose');
const Schema   = mongoose.Schema;
const Role = ["superadmin","admin", "teacher", "student", "guest"];
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
  position   : String,
  image: {
    type: String, default: ''
  },
  classes: [{
    type: Schema.Types.ObjectId,
    ref: 'Class',
    "default": [],
    require: true
  }],
  role: [{ type:String, enum: Role, required: true}]
  });

const User = mongoose.model('User', userSchema);
module.exports = User;
