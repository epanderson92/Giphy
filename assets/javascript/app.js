
	// This .on("click") function will trigger the AJAX Call
	$.ajax({url: queryURL, method: 'GET'}) {

	$("#findGalaxy").on('click', function(){

		// Here we grab the text from the input box 
		var starwars = $('#galaxyInput').val();

		console.log("movie");

		// Here we assemble our URL 
		var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + Star + Wars + "&api_key=dc6zaTOxFJmzC ";

		//------

		// YOUR CODE GOES IN THESE DASHES. DO NOT MANUALLY TOUCH THE HTML ABOVE.

		//------

		return false;
	})