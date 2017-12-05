const Spell = require('../models/spell');

function spellsIndex(req, res, next){
  Spell
    .find()
    .exec()
    .then(spells => res.status(200).json(spells))
    .catch(next);
}

module.exports = {
  index: spellsIndex
};
