var express = require('express');
var app = express();
//var route = require('/html/index.html');

var bodyParser = require('body-parser');
var jsonParser = bodyParser.json({extended : true});
//app.use(jsonParser);
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/html', express.static(__dirname + "/html"));
app.get('/', function (req, res) {
    res.redirect('/html/index.html');
});





app.post('/add', function (request, response) {
    var p1 = request.body.p1;
   // console.log(req);
    console.log(p1);
    
   // res.send(a);
    response.send(p1);
  
    //res.redirect('/html/index.html');
});

app.listen(8282, function () {
    console.log("http://localhost:8282");
});


// app.post('/post.html', function(request, response) {
//   var p1 = request.body.p1; 
//   console.log("p1=" + p1);
// });