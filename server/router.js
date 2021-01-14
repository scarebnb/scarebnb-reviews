const models = require('./models');
const router = require('express').Router();

router.get('/seed', models.seed.seedData);

module.exports = router;