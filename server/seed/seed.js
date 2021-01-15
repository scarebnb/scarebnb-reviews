const db = require('../db');
const faker = require('faker');
const { AvatarGenerator } = require('random-avatar-generator');
const generator = new AvatarGenerator();
/*** Helper Functions ***/
const { getRand, tagGenerator } = require('./helpers.js');


/*** Data Seed Methods ***/
const addLocations = () => {
  // [location]
  const locations = [faker.address.streetAddress()];

  const locationQuery = 'INSERT INTO locations (name) VALUES (?);';
  db.query(locationQuery, locations, (err) => {
    err ? console.error('Locations: ', err) : null;
  })

};

const addReviews = (listing_id) => {
  // [name, avatar, date, review, cleanliness, accuracy, comm, location, check_in, value, location_id]
  const reviews = [faker.name.findName(), generator.generateRandomAvatar(),
    faker.date.recent(), faker.lorem.paragraph(), getRand(1,5), getRand(1, 5),
      getRand(1, 5), getRand(1, 5), getRand(1, 5), getRand(1, 5), listing_id]


  const reviewsQuery = `INSERT INTO reviews (name, avatar, date, review,
    cleanliness, accuracy, comm, location, check_in, value, location_id)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);`;

  db.query(reviewsQuery, reviews, (err) => {
    err ? console.error('Reviews: ', err) : null
  })
};

const addTags = (review_id) => {
  // [name, review_id]
  const tags = [tagGenerator(), review_id]
  const tagsQuery = 'INSERT INTO tags (name, review_id) VALUES (?, ?);';

  db.query(tagsQuery, tags, (err) => {
    err ? console.error('Tags: ', err) : null;
  });
};


/*** Seed Data for 100 listings ***/
for (let i = 1; i <= 100; i++) {
  addLocations();

  // for every listing seed random number of reviews
  for (let r = 1; r <= getRand(6, 100); r++) {
    addReviews(i);

    // for every review add random tags to post
    for (let t = 1; t <= getRand(1, 10); t++) {
      addTags(r);
    }
  }
}

// end Connection to db
db.end((err) => {
  err ? console.error(err) :
    console.log('DB has been Seeded!')
});