const mongoose = require('mongoose');

const equipmentSchema = new mongoose.Schema({

  index: Number,
  name: String,
  equipment_category: String,
  weapon_category: String,
  weapon_range: String,
  category_range: String,
  cost: {
    quantity: Number,
    unit: String
  },
  damage: {
    dice_count: Number,
    dice_value: Number,
    damage_type: {
      url: String,
      name: String
    }
  },
  range: {
    normal: Number,
    long: Number
  },
  weight: Number,
  properties: [{
    name: String,
    url: String
  }],
  url: String,
  armor_category: {
    url: String,
    name: String
  },
  armor_class: {
    base: Number,
    dex_bonus: Boolean,
    max_bonus: Number
  },
  str_minimum: Number,
  stealth_disadvantage: Boolean,
  desc: [String],
  tool_category: String,
  vehicle_category: String,
  speed: {
    quantity: String,
    unit: String
  },
  capacity: String

});

module.exports = mongoose.model('Equipment', equipmentSchema);
