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
  // properties: [
  //   String,
  //   {
  //     name: String,
  //     url: String
  //   }],
  url: String
});

module.exports = mongoose.model('Equipment', equipmentSchema);
