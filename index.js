const express = require("express");
/*
name austin heislev-cook
*/
const fs = require("fs");
const db = require("mongodb");
app = express();
app.all('/', function(req, res) {
    let home = fs.readFile("index.html", function(err, data) {
        return data;
    });
    res.send(home);

});
app.post('/post', function(req, res) {
    var title = req.get("title");
    console.log(title);
    res.send(title.toString());
});

app.listen(8000);