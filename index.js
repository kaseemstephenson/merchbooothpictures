var express = require('express');
const path = require('path');

var port = process.env.PORT || 4200;
var app = express();
const dir = path.join(__dirname, '/public');

app.use(express.static(__dirname + '/public'));

//app.get('/', function (req, res) {
 //res.send(JSON.stringify({ Hello: 'World'}));
//});
app.listen(port, function () {
 console.log('Example app listening on port !');
});