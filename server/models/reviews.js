const db = require('../db');

const getAll = (id, cb) => {
  // query db to return all reviews for x LOCATION
  const reviews = `SELECT  l.location_id, l.name AS location_name, r.review_id, \
  r.location_id, r.name AS reviewer_name, r.avatar, r.date, r.review, \
  r.cleanliness, r.accuracy, r.comm, r.location, r.check_in, r.value, t.tag\
  FROM locations l RIGHT JOIN reviews r USING (location_id) RIGHT JOIN tags t \
  ON r.review_id = t.review_id WHERE l.location_id=${id}`;

  db.query(reviews, (err, result) => {
    err ? cb(err, null) : cb(null, result);
  })

};

module.exports = {
  getAll
};