const mongoose   = require('mongoose');
const Promise = require('bluebird');
mongoose.Promise = Promise;
const rp = require('request-promise');
const Spell = require('../models/Spell');
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
  .then(() => getSpells())
  .then(spells => console.log(`${spells.length} created!`))
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
