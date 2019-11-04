const express = require('express');

const app = express();

app.use(express.static(__dirname + '/../react-client/dist'));

let port = process.env.PORT || 3000;

app.listen(port, function () {
  console.log(`listening on port ${port}*!`);
});

