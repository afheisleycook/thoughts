"use strict";

var express = require("express");
/*
name austin heislev-cook
*/


var db = require("mongodb");

app = app.express();
app.all('/', function (req, res) {
  res.send("hello");
});
app.listen(8000);