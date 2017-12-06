const router = require('express').Router();

const users = require('../controllers/users');
const spells = require('../controllers/spells');
const features = require('../controllers/features');
const monsters = require('../controllers/monsters');
const proficiencies = require('../controllers/proficiencies');
const equipments = require('../controllers/equipments');

router.route('/users')
  .get(users.index)
  .post(users.create);

router.route('/spells')
  .get(spells.index);
router.route('/features')
  .get(features.index);
router.route('/monsters')
  .get(monsters.index);
router.route('/proficiencies')
  .get(proficiencies.index);
router.route('/equipments')
  .get(equipments.index);

router.route('/spells/:id')
  .get(spells.show);
router.route('/features/:id')
  .get(features.show);
router.route('/monsters/:id')
  .get(monsters.show);
router.route('/proficiencies/:id')
  .get(proficiencies.index);
router.route('/equipments.index')
  .get(equipments.show);

router.route('/users/:id')
  .get(users.show)
  .delete(users.delete)
  .put(users.update);

router.route('/*')
  .all((req, res) => res.notFound());

module.exports = router;
