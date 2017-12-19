const mongoose = require('mongoose');
const Schema   = mongoose.Schema;
const SUBJECT    = require('./class-types');
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
  subject: { type: String, enum: SUBJECT, required: true },
});

const Class = mongoose.model('Class', classSchema);
module.exports = Class;
