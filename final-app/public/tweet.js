$.ajax({
	type:"GET",
	url:"/ajax", //means /ajax we are in the same server a "relative path"
	success: function(data){
		for(var i = 0; i < data.tweets.length; i++){
			appendNewTweet(data.tweets[i]);
		}
	}
});

function appendNewTweet(tweet){
	var newTweet = "<div class='tweet-container'>" +
	"<div class='tweet-time'>" + new Date(tweet.time).toLocaleString() + "</div>" +
						//.toLocaleString() is a time format
	"<div class'tweet-body'>" + tweet.text + "</div>" +
	"</div>";

	$('#tweets-target').prepend(newTweet);
	//prepend puts in the beggining append puts in the end
}

$('#tweet').click(function(){
	$.ajax({
	type: "POST",
	url:"/ajax",
	contentType: "application/json", //is just like hey server I'm sending you a json
	data: JSON.stringify({tweet: $('#new-tweet').val()}), //JSON.stringify making an object to a string
	success: function(data){ //data is gonna be the new tweet
		appendNewTweet(data);
		$('#new-tweet').val(''); //clear value
	}
	});
});
