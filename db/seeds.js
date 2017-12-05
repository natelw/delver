const mongoose   = require('mongoose');
mongoose.Promise = require('bluebird');
// const Axios = require('axios');
// const Spell = require('../models/Spell');
const User = require('../models/User');
const { dbURI } = require('../config/environment');

//
//
//
// let SpellBook = {};
//
// function getSpells(req, res, next){
//   Axios
//     .get('http://www.dnd5eapi.co/api/spells/1')
//     .then(spell => SpellBook = spell.data.json())
//     .catch(next);
//
// }


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
  .catch(err => console.log(err))
  .finally(() => mongoose.connection.close());
