const db = require('../db');
const faker = require('faker');

module.exports = {

  seedData: () => {
    console.log(faker.name.findName());
  }

};



// -- INSERT INTO `reviews` (`id`,`name`,`profilePic`,`date`,`ratings_id`) VALUES
// -- ('','','','','');
// -- INSERT INTO `ratings` (`id`,`overall`,`cleanliness`,`accuracy`,`comm`,`location`,`check_in`,`value`, `tags`) VALUES
// -- ('','','','','','','','','');