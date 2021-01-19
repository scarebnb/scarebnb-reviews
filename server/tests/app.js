const express = require('express');
const controllers = require('../controllers');

const app = express();

app.get('/reviews/:id', controllers.reviews.get);

app.use(express.static(__dirname + '/../client/public'));

module.exports = app;