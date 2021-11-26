var express = require('express');
var app = express();
//var route = require('/html/index.html');

app.use('/html', express.static(__dirname + "/html"));
app.get('/', function (req, res) {
    res.redirect('/html/index.html');
});





app.post('/add', function (req, res) {
    var a = req.body.aff;
    console.log(JSON.stringify(a));
   // res.send(a);
    res.redirect('/html/index.html');
});

app.listen(8282, function () {
    console.log("http://localhost:8282");
});
