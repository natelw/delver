const Spell = require('../models/spell');

function spellsIndex(req, res, next){
  Spell
    .find()
    .exec()
    .then(spells => res.status(200).json(spells))
    .catch(next);
}


function spellsShow(req, res, next){
  Spell
    .findById(req.params.id)
    .exec()
    .then(spell => res.status(200).json(spell))
    .catch(next);
}

module.exports = {
  index: spellsIndex,
  show: spellsShow
};
