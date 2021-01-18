const models = require('../models');
const { format } = require('./apiFormatter.js');

const get = (req, res) => {
  const listing_id = req.params.id;

  models.reviews.getAll(listing_id, (err, result) => {
    if (err) {console.error(err); };

    res.json(format(result)).status(200).end();
  });
};


module.exports = {
  get
};