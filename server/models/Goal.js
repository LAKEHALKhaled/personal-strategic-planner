
const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const goalSchema = new Schema({
  text: {
    type: String,
    required: 'You need to set a goal!',
    minlength: 1,
    maxlength: 100,
    trim: true,
  },
  area: {
    type: String,
    required: true,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
});

const Goal = model('Goal', goalSchema);

module.exports = Goal;
