const Proficiency = require('../models/proficiency');

function proficienciesIndex(req, res, next){
  Proficiency
    .find()
    .exec()
    .then(proficiencies => res.status(200).json(proficiencies))
    .catch(next);
}


function proficienciesShow(req, res, next){
  Proficiency
    .findById(req.params.id)
    .exec()
    .then(proficiency => res.status(200).json(proficiency))
    .catch(next);
}

module.exports = {
  index: proficienciesIndex,
  show: proficienciesShow
};
