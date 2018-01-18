const Skill = require('../models/skill');

function skillsIndex(req, res, next){
  Skill
    .find()
    .exec()
    .then(skills => res.status(200).json(skills))
    .catch(next);
}


function skillsShow(req, res, next){
  Skill
    .findById(req.params.id)
    .exec()
    .then(skill => res.status(200).json(skill))
    .catch(next);
}

module.exports = {
  index: skillsIndex,
  show: skillsShow
};
