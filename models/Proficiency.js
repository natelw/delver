const mongoose = require('mongoose');

const proficiencySchema = new mongoose.Schema({
  index: Number,
  type: String,
  name: String,
  classes: [{
    name: String,
    url: String
  }],
  url: String
});

module.exports = mongoose.model('Proficiencies', proficiencySchema);
