/* eslint-disable no-console */
const mysql = require('mysql');

const connection = mysql.createConnection({
  user: 'root',
  password: '',
  database: 'reviews',
  multipleStatements: true,
});

connection.connect((err) => {
  if (err) { console.error(err); }
  console.log('Connected to DB!');
});

module.exports = connection;
