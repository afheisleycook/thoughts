"use strict";

var express = require('express');

var bodyParser = require('body-parser');

var multer = require('multer');

var upload = multer();
var app = express();

var sqlite = require("sqlite3");

var sqlite3 = require('sqlite3');

app.get('/', function (req, res) {
  res.render('home');
});
app.get('/form', function (req, res) {
  res.render('form');
});
app.set('view engine', 'pug');
app.set('views', './views'); // for parsing application/json

app.use(bodyParser.json()); // for parsing application/xwww-

app.use(bodyParser.urlencoded({
  extended: true
})); //form-urlencoded
// for parsing multipart/form-data

app.use(upload.array());
app.use(express["static"]('public'));
app.post('/add', function (req, res) {
  var data = req.body;
  console.log(data);
  db = new sqlite3.Database("thoughts.db", err);
  db.run("insert into THOUGHTS values(data)").then;

  if (err) {
    console.log(data);
  }

  console.log(err);
});
app.listen(3010);