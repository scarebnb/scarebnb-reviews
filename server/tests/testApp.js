const express = require('express');
const path = require('path');
const controllers = require('../controllers');

const app = express();

app.get('/reviews/:id', controllers.reviews.get);

app.use(express.static(path.join(__dirname, '/../client/public')));

module.exports = app;
