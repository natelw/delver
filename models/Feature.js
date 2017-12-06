const mongoose = require('mongoose');

const featureSchema = new mongoose.Schema({


  index: {type: Number},
  name: {type: String},
  level: Number,
  url: {type: String},
  desc: [String],
  class: {
    url: String,
    name: String
  }
});

module.exports = mongoose.model('Feature', featureSchema);
