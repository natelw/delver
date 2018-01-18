const mongoose = require('mongoose');

const monsterSchema = new mongoose.Schema({

  index: Number,
  name: String,
  size: String,
  type: String,
  subtype: String,
  alignment: String,
  armor_class: Number,
  hit_points: Number,
  hit_dice: String,
  speed: String,
  strength: Number,
  dexterity: Number,
  constitution: Number,
  intelligence: Number,
  wisdom: Number,
  charisma: Number,
  strength_save: Number,
  dexterity_save: Number,
  constitution_save: Number,
  intelligence_save: Number,
  wisdom_save: Number,
  charisma_save: Number,
  acrobatics: Number,
  animal_Handling: Number,
  arcana: Number,
  athletics: Number,
  deception: Number,
  history: Number,
  insight: Number,
  intimidation: Number,
  investigation: Number,
  medicine: Number,
  nature: Number,
  perception: Number,
  performance: Number,
  persuasion: Number,
  religion: Number,
  sleight_of_hand: Number,
  stealth: Number,
  survival: Number,
  damage_vulnerabilities: String,
  damage_resistances: String,
  damage_immunities: String,
  condition_immunities: String,
  senses: String,
  languages: String,
  challenge_rating: Number,
  special_abilities: [{
    attack_bonus: Number,
    desc: String,
    name: String
  }],
  actions: [
    {
      damage_bonus: Number,
      damage_dice: String,
      attack_bonus: Number,
      desc: String,
      name: String
    }],
  legendary_actions: [{
    attack_bonus: Number,
    desc: String,
    name: String
  }],
  url: String
});

module.exports = mongoose.model('Monster', monsterSchema);
