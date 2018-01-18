const Equipment = require('../models/equipment');

function equipmentsIndex(req, res, next){
  Equipment
    .find()
    .exec()
    .then(equipments => res.status(200).json(equipments))
    .catch(next);
}


function equipmentsShow(req, res, next){
  Equipment
    .findById(req.params.id)
    .exec()
    .then(equipment => res.status(200).json(equipment))
    .catch(next);
}

module.exports = {
  index: equipmentsIndex,
  show: equipmentsShow
};
