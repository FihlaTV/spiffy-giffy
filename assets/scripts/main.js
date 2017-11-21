$(document).ready(function(){
console.log("if you see this, you dun did load.");

let topics = ["greyhound", "dog", "cat", "kitten", "puppy", "sloth", "cycling", "buscemi", "motorcycle", "knitting", "australia"];

// dynamically generates buttons
let giphrames = topics.map((topic, idx, arr) =>{
	// console.log(idx, topic);
	$('.buttonHolder').append(`
		<button class="btn btn-primary btn-sm topic" id=${topic}>${topic}</button>
	`);
});

$('.topic').on("click", function(){
	console.log($(this).attr("id"));
	// console.log(`${$(this).id} button booped`);
})




















});



// GIF FRAME

// <div class="row gifHolder">
// 	<div class="col-xs-5 col-sm-3 col-md-3 col-lg-3">
// 		<img src="" alt=""/>
// 		<caption class="rating"></caption>
// 	</div>
// </div>