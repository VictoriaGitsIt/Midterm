//http://www.omdbapi.com/?s=avengers&apikey=3c645e87
//https://www.googleapis.com/books/v1/volumes?q=avengers

$("#searchBtn").click(function(){
	//$("#searchInput").val() 
	//$("#bookTitles").html('<h1>sxcvbnm,</h1>');
	$.getJSON('http://www.omdbapi.com/?s=' + $("#searchInput").val() + '&apikey=3c645e87',function(result){
		console.log(result);

		for(var i=0; i < result.Search.length; i++){
			$("#movieTitles").append('<h1 id="movieTitle">' + result.Search[i].Title + '</h1><img height="300" src="' + result.Search[i].Poster + '" />');
		}
	});

	$.getJSON('https://www.googleapis.com/books/v1/volumes?q=' + $("#searchInput").val(),function(result){
		console.log(result);

		for(var i=0; i < result.items.volumeInfo.title; i++){
			$("#bookTitles").append('<h1 id="bookTitle">' + result.items[0].volumeInfo.title + '</h1><img height="300" src="' + result.Search[i].Poster + '" />');
		}
	});
});
