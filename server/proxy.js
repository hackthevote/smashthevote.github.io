var express = require('express');
var app = express();

app.use(express.static('../'));
//app.use(express.static('c:/Users/Michael/tabby/www/'));

app.listen(3000, function () {
  console.log('smash the vote proxy listening on port 3000!');
});