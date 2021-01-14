const db = require('./db');
const faker = require('faker');


const getRand = (min, max) =>  {
  return Math.floor(
      Math.random() * (max - min) + min);
}

const values = {
  location: faker.address.streetAddress(),
  name: faker.name.findName(),
  avatar: faker.random.image(),
  date: faker.date.recent(),
  review: faker.lorem.paragraph(),
  cleanliness: getRand(1,5),
  accuracy: getRand(1, 5),
  comm: getRand(1, 5),
  location: getRand(1, 5),
  check_in: getRand(1, 5),
  value: getRand(1, 5)
}

for (let i of Object.keys(values)) {
  console.log(i, values[i]);
}



// let query = `INSERT INTO "locations" ("id","name") VALUES (${faker.address.streetAdress()}, )`




// -- INSERT INTO `locations` (`id`,`name`) VALUES
// -- ('','');
// -- INSERT INTO `reviews` (`id`,`name`,`avatar`,`date`) VALUES
// -- ('','','','');
// -- INSERT INTO `ratings` (`id`,`cleanliness`,`accuracy`,`comm`,`location`,`check_in`,`value`) VALUES
// -- ('','','','','','','');
// -- INSERT INTO `tags` (`id`,`name`) VALUES
// -- ('','');