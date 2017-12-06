const User = require('../models/user');

function usersIndex(req, res, next){
  User
    .find()
    .exec()
    .then(users => res.status(200).json(users))
    .catch(next);

}

function usersCreate(req, res, next){

  User
    .create(req.body)
    .then(user => res.status(201).json(user))
    .catch(next);
}

function usersShow(req, res, next){
  User
    .findById(req.params.id)
    .exec()
    .then(user => res.status(200).json(user))
    .catch(next);
}

function usersDelete(req, res, next){
  User
    .findById(req.params.id)
    .exec()
    .then((user) => {
      if(!user) return res.notFound();
      return user.remove();
    })
    .then(() => res.status(204).end())
    .catch(next);
}

function usersUpdate(req, res, next){
  User
    .findByIdAndUpdate(req.params.id, req.body, {new: true})
    .exec()
    .then(user => res.status(200).json(user))
    .catch(next);
}

module.exports = {
  index: usersIndex,
  create: usersCreate,
  show: usersShow,
  delete: usersDelete,
  update: usersUpdate
};
