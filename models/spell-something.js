const mongoose = require('mongoose');

const spellSchema = new mongoose.Schema({

  index: Number,
  name: {type: String},
  desc: [String],
  higher_level: [String],
  page: {type: String},
  range: {type: String},
  components: [String],
  material: {type: String},
  ritual: {type: String},
  duration: {type: String},
  concentration: {type: String},
  casting_time: {type: String},
  level: {type: Number},
  school: {
    url: String,
    name: String
  },
  classes:
   [
     {
       name: String
     }
   ],
  subclasses:
  [
    {
      url: String,
      name: String
    },{
      url: String,
      name: String
    }
  ],
  url: String

});

module.exports = mongoose.model('Spell', spellSchema);
