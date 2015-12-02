var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();

app.use(express.static(path.join(__dirname, 'app')));

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.route('/').get(function(req,res){
  res.render('index.html');
});

app.listen(3000);
