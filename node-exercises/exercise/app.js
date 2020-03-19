var express = require('express');
//calling the express in node_modules
var app = express();
//creating the app directly setup by express();

app.get('/cheer.txt', function(req, res){
	res.send('posivite to say');
});

app.get('/jeer.txt', function(req, res){
	res.send('negative to say');
});

var server = app.listen(8080);