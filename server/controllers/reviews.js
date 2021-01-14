const models = require('../models');

module.exports = {
  get: () => {
    //TODO:
    // get review from db
    // models.reviews.getAll
    models.reviews.getAll((err, result) => {
      err ? console.error(err) : console.log(result);

      //respond to request
      //res.json(result)
    });
  }
}