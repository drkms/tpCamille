var express = require('express');
var app = express();


app.use('/html', express.static(__dirname + "/html"));
app.get('/', function (req, res) {
    res.redirect('/html/index.html');
});

app.listen(8282, function () {
    console.log("http://localhost:8282");
});
