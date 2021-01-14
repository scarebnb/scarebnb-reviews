const models = require('../models');

module.exports = {
  seedData: () => {
    models.seed.seedData((err, results) => {
      err ? console.error(err) : console.log(results);
    });
  }
}