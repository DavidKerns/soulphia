const mongoose = require('mongoose');
require('../configs/database');
const Schema   = mongoose.Schema;
const applicationSchema = new Schema({
  bigToken:{
    type: String
  }

});


const Application = mongoose.model('Application', applicationSchema);
module.exports = Application;
