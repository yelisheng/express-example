var express = require('express');
var app = express();

app.get('/', function(req, res) {
   res.send('hello world!');
})
var server = app.listen(4000, function() {
   console.log('app listen in 4000');
})
