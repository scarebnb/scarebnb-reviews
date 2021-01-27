/* eslint-disable no-console */
const express = require('express');
const path = require('path');
const cors = require('cors');
const controllers = require('./controllers');

const app = express();

app.use(cors({
  origin: 'http://54.157.193.11:8000/',
}));

app.use('/bundle', cors(), express.static(path.join(__dirname, '/../client/public/bundle.js')));
app.use('/', cors(), express.static(path.join(__dirname, '/../client/public')));

app.get('/reviews/:id', cors(), controllers.reviews.get);

const PORT = 3002;

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
