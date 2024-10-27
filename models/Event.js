const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  date: { type: Date, required: true },
  location: { type: String, required: true },
  tickets: { type: Number, default: 0 },
});

module.exports = mongoose.model('Event', EventSchema);
