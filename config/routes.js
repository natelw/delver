const router = require('express').Router();

const users = require('../controllers/users');
const spells = require('../controllers/spells');
const features = require('../controllers/features');
const monsters = require('../controllers/monsters');
const proficiencies = require('../controllers/proficiencies');
const equipments = require('../controllers/equipments');
const skills = require('../controllers/equipments');
const sheets = require('../controllers/sheets');
const auth  = require('../controllers/auth');

router.route('/register')
  .post(auth.register);

router.route('/login')
  .post(auth.login);

router.route('/users')
  .get(users.index)
  .post(users.create);

router.route('/sheets')
  .get(sheets.index)
  .post(sheets.create);

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
router.route('/skills')
  .get(skills.index);

router.route('/sheets/:id')
  .get(sheets.show)
  .delete(sheets.delete)
  .put(sheets.update);

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
router.route('/skills/:id');

router.route('/users/:id')
  .get(users.show)
  .delete(users.delete)
  .put(users.update);

router.route('/*')
  .all((req, res) => res.notFound());

module.exports = router;
