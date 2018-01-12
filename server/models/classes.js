const mongoose = require('mongoose');
const Schema   = mongoose.Schema;
const SUBJECT    = require('./language-types');
const classSchema = new Schema({
  participants: [{ type: Schema.Types.ObjectId, ref: 'User'}],
 });

const Class = mongoose.model('Class', classSchema);
module.exports = Class;
