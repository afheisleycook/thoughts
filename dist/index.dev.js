"use strict";

var express = require("express");
/*
name austin heislev-cook
*/


var db = require("mongodb");

app = express();
app.all('/', function (req, res) {
  res.send("hello");
});
app.post('/post', function (req, res) {
  var title = req.get("title");
  console.log(title);
  res.send(title.toString());
});
app.listen(8000);