/* eslint-disable no-console */
const faker = require('faker');
const { AvatarGenerator } = require('random-avatar-generator');
const db = require('../db');

const generator = new AvatarGenerator();

/* Helper Functions */
const { getRand, tagGenerator } = require('./helpers.js');

/* Data Seed Methods */
const addLocations = () => {
  const street = faker.address.streetAddress();
  const city = faker.address.city();
  const state = faker.address.state();
  const zip = faker.address.zipCode();
  const address = `${street}, ${city}, ${state} ${zip}`;
  // [location]
  const locations = [address];

  const locationQuery = 'INSERT INTO locations (name) VALUES (?);';
  db.query(locationQuery, locations, (err) => {
    if (err) { console.error('Locations: ', err); }
  });
};

const addReviews = (listingId) => {
  // [name, avatar, date, review, cleanliness, accuracy, comm,
  // location, check_in, value, location_id]
  const reviews = [faker.name.findName(), generator.generateRandomAvatar(),
    faker.date.between('2015-01-01', '2021-01-01'), faker.lorem.paragraph(), getRand(3, 5), getRand(1, 5),
    getRand(1, 5), getRand(3, 5), getRand(3, 5), getRand(3, 5), listingId];

  const reviewsQuery = `INSERT INTO reviews (name, avatar, date, review,
    cleanliness, accuracy, comm, location, check_in, value, location_id)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);`;

  db.query(reviewsQuery, reviews, (err) => {
    if (err) { console.error('Reviews: ', err); }
  });
};

const addTags = (reviewId) => {
  // [name, reviewId]
  const tags = [tagGenerator(), reviewId];
  const tagsQuery = 'INSERT INTO tags (tag, review_id) VALUES (?, ?);';

  db.query(tagsQuery, tags, (err) => {
    if (err) { console.error('Tags: ', err); }
  });
};

/* Seed Data for 100 listings */
let reviewId = 0;
for (let i = 1; i <= 100; i += 1) {
  addLocations();

  // for every listing seed random number of reviews
  for (let r = 1; r <= getRand(6, 100); r += 1) {
    addReviews(i);

    reviewId += 1;
    // for every review add random tags to post
    for (let t = 1; t <= getRand(1, 10); t += 1) {
      // reviewId connects the tags that specific review
      addTags(reviewId);
    }
  }
}

// end Connection to db
db.end((err) => {
  if (err) { console.error(err); }

  console.log('DB has been Seeded!');
});
