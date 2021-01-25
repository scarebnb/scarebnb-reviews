/* eslint-disable no-console */
const express = require('express');
const path = require('path');
// const cors = require('cors');
const controllers = require('./controllers');

const app = express();

app.get('/reviews/:id', controllers.reviews.get);

// app.use(cors({
//   origin: 'http://localhost:8000',
// }));
// app.use('/bundle', express.static(path.join(__dirname, '/../client/public/bundle.js')));
app.use(express.static(path.join(__dirname, '/../client/public')));

const PORT = process.env.PORT || 3002;

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
