
	// This .on("click") function will trigger the AJAX Call
	// var queryURL = "http://api.giphy.com/v1/gifs/search?q=" +  + "&api_key=dc6zaTOxFJmzC&limit=10 ";

	var starWarsGif=["Yoda", "Luke Skywalker", "Obi-One Kanobi" ]


	// var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=starwars";


	 var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + person + "&api_key=dc6zaTOxFJmzC&limit=10";

	$.ajax({url: queryURL, method: 'GET'}) 
	.done(function(response) {
	var results = responce.data;


            var gifDiv = $('<div class="item">')

                var rating = results[i].rating;

                var p = $('<p>').text( "Rating: " + rating);

                var personImage = $('<img>');
                personImage.attr('src', results[i].images.fixed_height.url);

                gifDiv.append(p)
                gifDiv.append(personImage)

                $('#gifView').prepend(gifDiv);
            })







// -------------------------------------------------------------------------------------

	function renderButtons(){
		// deletes the movie before roloading
		$("#buttonsView").empty();

		// loops through the array of gif
		for(var i = 0; i < starWarsGif.length; i++){

		var a = $("<button>");

		a.addClass("movie");
		a.attr("data-name",starWarsGif);
		a.text(starWarsGif[i]);
		$("#buttonview").append(a);


		}

	};

	$("#findGalaxy").on('click', function(){

		// Here we grab the text from the input box 
		var starwars = $("#buttonsView").val().trim();
		console.log("#galaxyInput");
			starWarsGif.push(starWarsGif);

			

		// Here we assemble our URL 
		
		//------

		// YOUR CODE GOES IN THESE DASHES. DO NOT MANUALLY TOUCH THE HTML ABOVE.

		//------

		return false;
	})


	document.on("click", "#buttonsView", displayRenderButtons);

	renderButtons();




// -------------------------------------------------------------------------------------







			

