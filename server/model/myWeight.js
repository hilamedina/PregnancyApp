const mongoose = require('mongoose');

const myWeightSchema = new mongoose.Schema({
  userId: String,
  weight: Number,
  week: String,
});

module.exports = mongoose.model('myWeight', myWeightSchema);
