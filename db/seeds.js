const mongoose   = require('mongoose');
const Promise = require('bluebird');
mongoose.Promise = Promise;
const rp = require('request-promise');
// const Spell = require('../models/Spell');
// const Monster = require('../models/Monster');
// const Feature = require('../models/Feature');
const Equipment = require('../models/Equipment');
const User = require('../models/User');
const { dbURI } = require('../config/environment');

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
  // .then(() => getSpells())
  // .then(spells => console.log(`${spells.length} spells created!`))
  // .then(() => getFeatures())
  // .then(features => console.log(`${features.length} features created!`))
  // .then(() => getProficiencies())
  // .then(proficiencies => console.log(`${proficiencies.length} proficiencies created!`))
  // .then(() => getMonsters())
  // .then(monsters => console.log(`${monsters.length} monsters created!`))
  .then(() => getEquipments())
  .then(equipments => console.log(`${equipments.length} equipment created`))
  .catch(err => console.log(err))
  .finally(() => mongoose.connection.close());
//
//
// function getSpells() {
//   return rp({
//     url: 'http://www.dnd5eapi.co/api/spells',
//     method: 'GET',
//     json: true
//   })
//     .then(res => {
//       const spellRequests = res.results.map(result => rp({
//         method: 'GET',
//         url: result.url,
//         json: true
//       }));
//
//       return Promise.all(spellRequests);
//     })
//     .then(spellArray => {
//       return Spell.create(spellArray);
//     });
// }

//
// function getFeatures() {
//   return rp({
//     url: 'http://www.dnd5eapi.co/api/features',
//     method: 'GET',
//     json: true
//   })
//     .then(res => {
//       const featureRequests = res.results.map(result => rp({
//         method: 'GET',
//         url: result.url,
//         json: true
//       }));
//
//       return Promise.all(featureRequests);
//     })
//     .then(featureArray => {
//       return Feature.create(featureArray);
//     });
// }

// function getMonsters() {
//   return rp({
//     url: 'http://www.dnd5eapi.co/api/monsters',
//     method: 'GET',
//     json: true
//   })
//     .then(res => {
//       const monsterRequests = res.results.map(result => rp({
//         method: 'GET',
//         url: result.url,
//         json: true
//       }));
//
//       return Promise.all(monsterRequests);
//     })
//     .then(monsterArray => {
//       return Monster.create(monsterArray);
//     });
// }

// function getProficiencies() {
//   return rp({
//     url: 'http://www.dnd5eapi.co/api/proficiencies',
//     method: 'GET',
//     json: true
//   })
//     .then(res => {
//       const proficiencyRequests = res.results.map(result => rp({
//         method: 'GET',
//         url: result.url,
//         json: true
//       }));
//
//       return Promise.all(proficiencyRequests);
//     })
//     .then(proficiencyArray => {
//       return Proficiency.create(proficiencyArray);
//     });
// }

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
      return Equipment.create(equipmentArray);
    });
}
