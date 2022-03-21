"use strict";

var express = require("express");
/*
name austin heislev-cook
*/


var fs = require("fs");

var db = require("mongodb");

app = express();
app.all('/', function(req, res) {
    var home = fs.readFile("index.html", function(err, data) {
        return data.toString();
    });
    res.send(home);
});
app.post('/post', function(req, res) {
    var title = req.get("title");
    console.log(title);
    res.send(title.toString());
});
app.listen(8000);