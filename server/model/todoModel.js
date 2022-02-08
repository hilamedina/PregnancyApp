const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
  userId: String,
  task: String,
  isCompleted: Boolean,
});

module.exports = mongoose.model('Todo', todoSchema);
