const Sheet = require('../models/Sheet');

function sheetsIndex(req, res, next){
  Sheet
    .find()
    .exec()
    .then(sheets => res.status(200).json(sheets))
    .catch(next);

}

function sheetsCreate(req, res, next){

  Sheet
    .create(req.body)
    .then(sheet => res.status(201).json(sheet))
    .catch(next);
}

function sheetsShow(req, res, next){
  Sheet
    .findById(req.params.id)
    .exec()
    .then(sheet => res.status(200).json(sheet))
    .catch(next);
}

function sheetsDelete(req, res, next){
  Sheet
    .findById(req.params.id)
    .exec()
    .then((sheet) => {
      if(!sheet) return res.notFound();
      return sheet.remove();
    })
    .then(() => res.status(204).end())
    .catch(next);
}

function sheetsUpdate(req, res, next){
  Sheet
    .findByIdAndUpdate(req.params.id, req.body, {new: true})
    .exec()
    .then(sheet => res.status(200).json(sheet))
    .catch(next);
}

module.exports = {
  index: sheetsIndex,
  create: sheetsCreate,
  show: sheetsShow,
  delete: sheetsDelete,
  update: sheetsUpdate
};
