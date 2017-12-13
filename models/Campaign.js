const mongoose = require('mongoose');

const campaignSchema = new mongoose.Schema({
  name: { type: String, required: true },
  dungeon_master: [String],
  players: [{type: mongoose.Schema.ObjectId, ref: 'User'}],
  monsters: [{type: mongoose.Schema.ObjectId, ref: 'Monster'}],
  character_sheets: [{type: mongoose.Schema.ObjectId, ref: 'Sheet'}],
  monster_last_initiative: Number,
  createdBy: String
}, {
  timestamps: true
});

module.exports = mongoose.model('Campaign', campaignSchema);
