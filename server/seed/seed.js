const db = require('../db');
const faker = require('faker');
const { AvatarGenerator } = require('random-avatar-generator');
const generator = new AvatarGenerator();
/*** Helper Functions ***/
const { getRand, tagGenerator } = require('./helpers.js');


/*** Data Seed Methods ***/
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
  const tagsQuery = 'INSERT INTO tags (tag, review_id) VALUES (?, ?);';

  db.query(tagsQuery, tags, (err) => {
    err ? console.error('Tags: ', err) : null;
  });
};


/*** Seed Data for 100 listings ***/
let review_id = 0;
for (let i = 1; i <= 100; i++) {
  addLocations();

  // for every listing seed random number of reviews
  for (let r = 1; r <= getRand(6, 100); r++) {
    addReviews(i);
    review_id++;
    // for every review add random tags to post
    for (let t = 1; t <= getRand(1, 10); t++) {
      // review_id connects the tags that specific review
      addTags(review_id);
    }
  }
}

// end Connection to db
db.end((err) => {
  err ? console.error(err) :
    console.log('DB has been Seeded!')
});