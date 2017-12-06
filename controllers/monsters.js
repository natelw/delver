const Monster = require('../models/Monster');

function monstersIndex(req, res, next){
  Monster
    .find()
    .exec()
    .then(monsters => res.status(200).json(monsters))
    .catch(next);
}


function monstersShow(req, res, next){
  Monster
    .findById(req.params.id)
    .exec()
    .then(monster => res.status(200).json(monster))
    .catch(next);
}

module.exports = {
  index: monstersIndex,
  show: monstersShow
};
