const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  start: Date,
  end: Date,
  title: String,
});
const MyEvent = mongoose.model('MyEvent', eventSchema);
module.exports = MyEvent;
