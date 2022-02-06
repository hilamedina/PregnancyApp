const mongoose = require('mongoose');

const weeklySchema = new mongoose.Schema({
  weekNumber: Number,
  label: String,
  description: String,
});

module.exports = mongoose.model('Weekly', weeklySchema);
