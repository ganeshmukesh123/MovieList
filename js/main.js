$(document).ready(() => {  //same as $(document).ready(function() {
	//alert(1);

	//this snippet of code fired when enter key is clicked
	$("#searchForm").on('submit', (e) => {
		//alert(1);
		//console.log($("#searchText").val());
		let searchText = $("#searchText").val();
		getMovies(searchText);
		e.preventDefault();
	});


	//clicking Go Button
	$("#searchButton").click(() => {
		//console.log($("#searchText").val());
		let searchText = $("#searchText").val();
		getMovies(searchText);
	});
});

function getMovies(searchText){
	axios.get('http://www.omdbapi.com/?i=tt3896198&apikey=132b235c&s='+searchText)
	   .then((response) => {
	   	 //console.log(response);
	   	 let movies = response.data.Search;
	   	 //console.log(movies);
	   	 let output ='';
	   	 $.each(movies , (index , movie) => {
			//console.log(movie.Poster);
			if((movie.Poster) != "N/A"){
				if(imageExists(movie.Poster)){
			   	 	output += `
			   	 	    <div class='col-md-3'>
			   	 	       <div class="text-center movie">
			   	 	        <img src="${movie.Poster}" class="movie-poster">
			   	 	        <h5>${movie.Title}</h5>
			   	 	        <a onclick="movieSelected('${movie.imdbID}')" class="btn btn-primary" href="#">Movie Details</a>
			   	 	       </div>
			   	 	    </div>
			   	 	`;
		   	    }
	   	    }
	   	 	
	   	 });
	   	 $("#movies").html(output);
	   })
	   .catch((err) => {
	   	 console.log(err);
	   })
}

function imageExists(image_url){

    var http = new XMLHttpRequest();

    http.open('HEAD', image_url, false);
    http.send();


}