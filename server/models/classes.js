const mongoose = require('mongoose');
const Schema   = mongoose.Schema;
const classSchema = new Schema({
  teacher: {
    type: Schema.Types.ObjectId,
    require: true,
  },
  students: [{
    type: Schema.Types.ObjectId,
    require: true,
    'default': []
  }],
  length: Number,
});

const Class = mongoose.model('Class', classSchema);
module.exports = Class;
