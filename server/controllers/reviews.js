/* eslint-disable no-console */
const models = require('../models');
const { format } = require('./apiFormatter.js');

const get = (req, res) => {
  const listingId = req.params.id;

  models.reviews.getAll(listingId, (err, result) => {
    if (err) { console.error(err); }

    res.json(format(result)).status(200).end();
  });
};

module.exports = {
  get,
};
