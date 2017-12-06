const mongoose = require('mongoose');

const sheetSchema = new mongoose.Schema({
  name: { type: String, required: true },
  class: { type: String, required: true },
  level: Number,
  race: { type: String, required: true },
  exp: Number,
  str: Number,
  dex: Number,
  con: Number,
  int: Number,
  wis: Number,
  cha: Number,
  MaxHp: Number,
  Ac: Number,
  spells: Array,
  features: Array,
  proficiencies: Array,
  skills: Array,
  equipment: Array,
  bio: String,
  createdBy: { type: mongoose.Schema.ObjectId, ref: 'User', required: true }
}, {
  timestamps: true
});

module.exports = mongoose.model('Sheet', sheetSchema);
