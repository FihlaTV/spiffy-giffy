$(document).ready(function(){
console.log("if you see this, you dun did load.");

let topics = ["greyhound", "dog", "cat", "kitten", "puppy", "sloth", "bicycle", "buscemi", "motorcycle", "knitting", "australia"];

// dynamically generates buttons
let giphrames = topics.map((topic, idx, arr) =>{
	$('.buttonHolder').append(`
		<button class="btn btn-primary btn-sm topic" id=${topic}>${topic}</button>
	`);
});

// button event listener
$('.topic').on("click", function(){
	// console.log($(this).attr("id"));
	let term = $(this).attr("id");
	$('.gifHolder').empty();
	// console.log(`${$(this).id} button booped`);
	let queryURL = `https://api.giphy.com/v1/gifs/search?apikey=dc6zaTOxFJmzC&q=${term}&limit=10`;
	$.ajax({
		url: queryURL,
		method: 'GET', 
	}).done(function(res){
		let dataArr = res.data;
		let urlStill = 
		console.log(dataArr);
		//TODO: figure out how not to get the same ones.
		$.each( dataArr, function( idx, val) {
			let gif = dataArr[idx];
			$('.gifHolder').append(`
					<div class="col-xs-5 col-sm-3 col-md-3 col-lg-3 gifDiv">
						<img id=${term} class="imgGif" src="${gif.images.original_still.url}" id="${term}" alt="a gif of ${term}"/>
						<caption class="rating">GIF rating: ${gif.rating}</caption>
					</div>
			`);
			
		});
//if the source is still, make it orig. if it's orig, make it still.
//target the end of the src url because that's the difference

		$('.imgGif').each(function(idx) {
				$(this).on("click", function(){
					let src = $(this).attr("src");
					console.log($(this).attr("src"));
					//src is a string. split it. 
					console.log((src.split("_")));
					//["https://media0.giphy.com/media/v6NlYjkDOEoBG/giphy", "s.gif"]
					if($(src.split("_")).last()[0] == "s.gif"){
						$(this).attr('src', src.replace('_s.gif', '.gif'));
					} else {
						$(this).attr('src', src.replace('.gif', '_s.gif'));
					}
				})
			})
	})
});
// add click event to each image
// $( ".selected" ).each(function(index) {
//     $(this).on("click", function(){
//         //do stuff
//     });
// });



// notes from class
// var word = "sloth";
//     var queryURL = "https://api.giphy.com/v1/gifs/search?apikey=dc6zaTOxFJmzC&q="+ word +"&limit=1";

//     $.ajax({
//       url: queryURL,
//       method: 'GET'
//     }).done(function(response) {
//       var url = response.data[0].images.original.url;
//       console.log(url);
//       $('.one').html('<img src=' + url + '>');

//     });
//host api.giphy.com
// ajax GET req /v1/gifs/search
// my api_key fM5XJogW2zV8SuZD9db4FqZ34WLR1uuc
// response:
// data: object[]//what i want
// GIF Object
// pagination: Pagination Object //stuff i don't need now
// meta: Meta Object//ditto
/*<div class="row gifHolder">
			<div class="col-xs-5 col-sm-3 col-md-3 col-lg-3">
				<img src="${gif}" alt="${term} gif"/>
				<caption class="rating"></caption>
			</div>
</div>*/













});

// 1) create an array of topics. not too many. will populate later with more.

// 2) dynamically load buttons onto page

// 3) add event that listens for btn being clicked.

// 4) retrieve 10 stills from giphy with the topic that is that button's topic (text or set as id)

// 5) clicking on image toggles begtween still and animation

// 6) form with input to add another topic

// 7) newly added topic populates with 10 gifs and the onclick/toggle fcn

// 8) change code so the same 10 aren't always chosen. 



// GIF FRAME

// <div class="row gifHolder">
// 	<div class="col-xs-5 col-sm-3 col-md-3 col-lg-3">
// 		<img src="" alt=""/>
// 		<caption class="rating"></caption>
// 	</div>
// </div>