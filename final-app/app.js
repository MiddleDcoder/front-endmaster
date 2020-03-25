var express = require('express'); //calling the express as server framework of node.js
var app = express();
var bodyParser = require('body-parser'); //body-parser are their in npm to read JSON files because express can't do it alone
app.use(bodyParser.json()); //invoked here the bodyParser.json()

var tweets = [
//array of objects
	{text: "Hai dude.", time: new Date().getTime() - 12300},
	{text: "This is cool.", time: new Date().getTime() - 1000},
	{text: "What's up?", time: new Date().getTime()},
];

app.use(express.static(__dirname + '/public')); //use the public folder as the static directory
//__dirname is to tell you what that file name is
app.get('/ajax', function(request, response){
	response.type('json'); // telling the client that the server is sending back json
	response.end(JSON.stringify({tweets:tweets})); //then convert object to string
});

app.post('/ajax', function(request, response){
	//creating the new tweet 
	//request.body.tweet is like {
//  tweet: "a wild tweet appears."
//  }
	var newTweet = {text: request.body.tweet, time: new Date().getTime()};
	tweets.push(newTweet);//adding the new tweet to array objects in the tweets list
	response.type('json'); // telling the client that the server is sending back json
	response.end(JSON.stringify(newTweet));
});


var server = app.listen(8080);