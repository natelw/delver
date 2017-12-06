const mongoose = require('mongoose');

const skillSchema = new mongoose.Schema({

  index: Number,
  name: String,
  desc: [String],
  ability_score: {
    url: String,
    name: String
  },
  url: String
});

module.exports = mongoose.model('Skill', skillSchema);
