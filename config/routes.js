const router = require('express').Router();

const users = require('../controllers/users');

router.route('/users')
  .get(users.index)
  .post(users.create);


router.route('/users/:id')
  .get(users.show)
  .delete(users.delete)
  .put(users.update);

router.route('/*')
  .all((req, res) => res.notFound());

module.exports = router;