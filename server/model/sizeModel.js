const mongoose = require('mongoose');

const sizeSchema = new mongoose.Schema({
  weekNumber: Number,
  label: String,
  photo: String,
  description: String,
  cm: String,
});

module.exports = mongoose.model('Size', sizeSchema);
