$(document).ready(() => {  //same as $(document).ready(function() {
	//alert(1);

	//
	// $("#searchText").on('submit', (e) => {
	// 	console.log($("#searchText").val());
	// 	e.preventDefault();
	// });


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
	   	 console.log(response);
	   })
	   .catch((err) => {
	   	 console.log(err);
	   })
}