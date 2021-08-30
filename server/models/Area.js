const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const areaSchema = new Schema({
  areaText: {
    type: String,
    required: 'choose 1 area of life balance!',
    minlength: 1,
    maxlength: 60,
    trim: true,
  },
  areaAuthor: {
    type: String,
    required: true,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
  goals: [
    {
      goalText: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280,
      },
      goalAuthor: {
        type: String,
        required: true,
      },
      createdAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp),
      },
    },
  ],
});

const Area = model('Area', areaSchema);

module.exports = Area;

