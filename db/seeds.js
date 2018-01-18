const mongoose   = require('mongoose');
const Promise = require('bluebird');
mongoose.Promise = Promise;
const rp = require('request-promise');
const { dbURI } = require('../config/environment');
const Proficiency = require('../models/proficiency');
const Spell = require('../models/spell');
const Monster = require('../models/monster');
const Feature = require('../models/feature');
const Equipment = require('../models/equipment');
const Skill = require('../models/skill');
const User = require('../models/user');


const userData = [{
  username: 'nate',
  email: 'nate@nate.com',
  password: 'password',
  passwordConfirmation: 'password'
},{
  username: 'shona',
  email: 'shona@shona.com',
  password: 'password',
  passwordConfirmation: 'password'

},{
  username: 'tom',
  email: 'tom@tom.com',
  password: 'password',
  passwordConfirmation: 'password'
}];

mongoose.connect(dbURI, { useMongoClient: true })
  .then(db => db.dropDatabase())
  .then(() => User.create(userData))
  .then(users => console.log(`${users.length} users created!`))
  .then(() => getSpells())
  .then(spells => console.log(`${spells.length} spells created!`))
  .then(() => getFeatures())
  .then(features => console.log(`${features.length} features created!`))
  .then(() => getProficiencies())
  .then(proficiencies => console.log(`${proficiencies.length} proficiencies created!`))
  .then(() => getMonsters())
  .then(monsters => console.log(`${monsters.length} monsters created!`))
  .then(() => getEquipments())
  .then(equipments => console.log(`${equipments.length} equipment created`))
  .then(() => getSkills())
  .then(skills => console.log(`${skills.length} skills created`))
  .catch(err => console.log(err))
  .finally(() => mongoose.connection.close());


function getSpells() {
  return rp({
    url: 'http://www.dnd5eapi.co/api/spells',
    method: 'GET',
    json: true
  })
    .then(res => {
      const spellRequests = res.results.map(result => rp({
        method: 'GET',
        url: result.url,
        json: true
      }));

      return Promise.all(spellRequests);
    })
    .then(spellArray => {
      return Spell.create(spellArray);
    });
}


function getFeatures() {
  return rp({
    url: 'http://www.dnd5eapi.co/api/features',
    method: 'GET',
    json: true
  })
    .then(res => {
      const featureRequests = res.results.map(result => rp({
        method: 'GET',
        url: result.url,
        json: true
      }));

      return Promise.all(featureRequests);
    })
    .then(featureArray => {
      return Feature.create(featureArray);
    });
}

function getMonsters() {
  return rp({
    url: 'http://www.dnd5eapi.co/api/monsters',
    method: 'GET',
    json: true
  })
    .then(res => {
      const monsterRequests = res.results.map(result => rp({
        method: 'GET',
        url: result.url,
        json: true
      }));

      return Promise.all(monsterRequests);
    })
    .then(monsterArray => {
      return Monster.create(monsterArray);
    });
}

function getProficiencies() {
  return rp({
    url: 'http://www.dnd5eapi.co/api/proficiencies',
    method: 'GET',
    json: true
  })
    .then(res => {
      const proficiencyRequests = res.results.map(result => rp({
        method: 'GET',
        url: result.url,
        json: true
      }));

      return Promise.all(proficiencyRequests);
    })
    .then(proficiencyArray => {
      return Proficiency.create(proficiencyArray);
    });
}

function getEquipments() {
  return rp({
    url: 'http://www.dnd5eapi.co/api/equipment',
    method: 'GET',
    json: true
  })
    .then(res => {
      const equipmentRequests = res.results.map(result => rp({
        method: 'GET',
        url: result.url,
        json: true
      }));

      return Promise.all(equipmentRequests);
    })
    .then(equipmentArray => {
      // Normalize data for entry into MongoDB
      equipmentArray = equipmentArray.map(equipmentData => {
        equipmentData.properties = equipmentData.properties ? equipmentData.properties.map(property => {
          if(typeof property === 'string') return { name: property };
          return property;
        }) : [];

        if(equipmentData['weapon_category:']) {
          equipmentData.weapon_category = equipmentData['weapon_category:'];
          delete equipmentData['weapon_category:'];
        }

        if(equipmentData.damage &&
          equipmentData.damage.damage_type &&
          equipmentData.damage.damage_type.name &&
          equipmentData.damage.damage_type.name.name) {
          equipmentData.damage.damage_type.name = equipmentData.damage.damage_type.name.name;
        }

        return equipmentData;
      });

      return Equipment
        .create(equipmentArray);
    });
}

function getSkills() {
  return rp({
    url: 'http://www.dnd5eapi.co/api/skills',
    method: 'GET',
    json: true
  })
    .then(res => {
      const skillRequests = res.results.map(result => rp({
        method: 'GET',
        url: result.url,
        json: true
      }));

      return Promise.all(skillRequests);
    })
    .then(skillsArray => {
      return Skill.create(skillsArray);
    });
}
