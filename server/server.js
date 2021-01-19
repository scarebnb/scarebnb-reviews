const express = require('express');
const controllers = require('./controllers');

const app = express();

app.get('/reviews/:id', controllers.reviews.get);

app.use(express.static(__dirname + '/../client/public'));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`)
});