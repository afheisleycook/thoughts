const http = require('http');
const db = require('sqlite3');
const fs = require('fs');
const { Http2ServerResponse } = require('http2');
db.Database.name = "thoughts";
app = http.createServer(function(req, res) {
    request = req.url;
    if (req.url == "/")
        res.write("<form method='post'><label><input type='text' name='name'><input type='submit'></form>");
    res.end();


    if (req.method == "POST") {
        mdata = req.url;
        console.log(mdata);
        var data = Http2ServerResponse.Stream;



    }
    console.log(req.url);
});
app.listen("8888");