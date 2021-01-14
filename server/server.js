const express = require('express');
const db = require('./db');
const router = require('./router.js');

const app = express();

app.use('/tests', router);

app.use(express.static(__dirname + '/../client/public'));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
