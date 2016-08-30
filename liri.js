var twitter = require('twitter');
var twitterKeys = require('./keys.js').twitterKeys;
// var spotify = require('spotify');
// var spotifyKeys = require('./keys.js').spotifyKeys;

// Load the fs package to read and write //
var fs = require('fs');
// Take user input for action
var direct = process.argv[2];
// //User input for movie-this and spotify-this-song //
// var parameter = process.argv[3]

//Switch to determine action to take
switch(direct){
	//This will show your latest tweets and when they were created at in your terminal/bash window.
	case 'my-tweets':
    {
        myTweets();
    }
        break;
    case 'spotify-this-song':
    {
    	mySpotify();

    }
    //     break;
    // case 'movie-this':
    // {
    //     var movie = process.argv[3];
    //     movieThis(movie);
    // }
    //     break;
    // case 'do-what-it-says':
    // {
}
//Twitter API client library for node.js -- npm install twitter
function myTweets(){
	// Grab the keys.js info
	// Set client to key grabbed
	var client = new twitter(twitterKeys);

	// Set my screen_name and number of tweets to pull //
	var params = {screen_name: '@deny_us_not', count: 20};

	// Get timeline info //
	client.get('statuses/user_timeline', params, function(error, tweets) {
	 	
	 	// If an error occurs //
	 	if (error) {
		    console.log('Error occurred: ' + error);
		    return;
		}
	 	
	 	// If no error occurs //
	 	if (!error) {
		
			// Display 10 current tweets //
			for (var i = 0; i < tweets.length; i++) {
				console.log((parseInt([i]) + 1) + '. ' + tweets[i].text);
			}    
		}
	});

}

	function mySpotify(){
	// Grab the keys.js info//
	// Set client to key grabbed//

	var spotify = require ('spotify');


	spotify.search({ type: 'track', query: value 'ace of base the sign'}, function(err, data) {
	    if ( err ) {
	        console.log('Error occurred: ' + err);
	        return;
	    }
	 	// else {
		 // 	console.log("-----INCOMING-----")
	  //   	var spotifyThis = 
	     
		 //    var artist = spotifyThis.
		 //    console.log("Artist: " + artist);
		 //    var song = spotifyThis.
		 //    console.log("Song name: " + song);
		 //    var album = spotifyThis.
		 //    console.log("Album: " + album);


// });

// }







// var request = require('request');
// request('http://www.omdbapi.com/?', function (error, response, body) {
//   if (!error && response.statusCode == 200) {
//     console.log(body) // Show the HTML for the Google homepage. 
//   }
// })