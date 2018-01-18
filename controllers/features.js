const Feature = require('../models/feature');

function featuresIndex(req, res, next){
  Feature
    .find()
    .exec()
    .then(features => res.status(200).json(features))
    .catch(next);
}


function featuresShow(req, res, next){
  Feature
    .findById(req.params.id)
    .exec()
    .then(feature => res.status(200).json(feature))
    .catch(next);
}

module.exports = {
  index: featuresIndex,
  show: featuresShow
};
