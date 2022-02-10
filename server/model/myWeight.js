const mongoose = require('mongoose');

const myWeightSchema = new mongoose.Schema({
  userId: String,
  weight: Number,
  week: String,
  date: String,
});

module.exports = mongoose.model('MyWeight', myWeightSchema);
