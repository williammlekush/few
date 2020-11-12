
var app = {

	// Array to store articles
	nyTimesArticles : [],

	initialize: function() {
		app.getNYTimesData();
	},

	// This method creates an HTML H3 element out of each article's headline.
	makeHTML: function() {
		var theHTML = '';

		// Build div with an h3 containing the headline nested in it.
		for (var i = 0; i < app.nyTimesArticles.length; i++){
			theHTML += "<div class='nytHeadline'>";
			theHTML += "<h3>" + app.nyTimesArticles[i].headline.main + "</h3>";
			theHTML += "</div>";
		}

		// Add headline divs to the container div.
		$('.container').html(theHTML);
	},

	// This method calls the NYT API for articles with headlines containing kangaroo.
	getNYTimesData: function() {
		console.log("Get NY Times Data");

		// Initialize a search word.
		var currentSearchWord = 'kangaroo';
		console.log(currentSearchWord);

		// Initialize a random number to choose a page from the first 20 pages of NYT results to display.
		let randNum = Math.floor((Math.random()*20));
		
		// Build the URL as a filter query search for headlines containing the search word. Filter for a random page. Sort them from newest to oldest.
		var nyTimesURL = 'http://api.nytimes.com/svc/search/v2/articlesearch.json?fq=headline%3A%22' + currentSearchWord + '%22&page=' + randNum + '&sort=newest&api-key=';

		// Initialize your API key.
		var myNYKey = '';

		// Add your API key.
		var nyTimesReqURL = nyTimesURL + myNYKey;
		console.log(nyTimesReqURL);

		// Make the API request.
		fetch(nyTimesReqURL)
		.then(response => response.json())

		// Then store the docs in the articles array.
		.then(data => {
			debugger;
			app.nyTimesArticles = data.response.docs;
			console.log(app.nyTimesArticles);
			
			// Call make HTML
			app.makeHTML();
		})

		.catch(error => console.log(error));
	}
};

 app.initialize();
 