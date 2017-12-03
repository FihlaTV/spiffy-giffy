$(document).ready(function(){
console.log("if you see this, you dun did load.");

let topics = ["greyhounds", "sighthound", "kittens", "puppies", "sloths", "bicycle", "motorcycle", "numbat", "axolotl"];

let people = ["Katy", "Cassidy", "Buscemi","Rossi", "Erik", "Alec", "Rachel", "Lance", "Thomas", "Osei"];

let misc = ["I hate toast"];

// dynamically generates buttons
function loadButtons(){
	$('.buttonHolder1').empty();
	$('.buttonHolder2').empty();
	$('.buttonHolder3').empty();
	let giphrames1 = topics.map((topic, idx, arr) =>{
		$('.buttonHolder1').append(`
			<button class="btn btn-primary topic terms" id=${topic}>${topic}</button>
		`);
	});
	let giphrames2 = people.map((person, idx, arr) =>{
		$('.buttonHolder2').append(`
			<button class="btn btn-primary person terms" id=${person}>${person}</button>
		`);
	});
	let giphrames3 = misc.map((thing, idx, arr) =>{
		$('.buttonHolder3').append(`
			<button class="btn btn-primary misc terms" id=${thing}>${thing}</button>
		`);
	});


// button event listener
$('.topic, .person, .misc').on("click", function(){
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
		//TODO: figure out how not to get the same ones.
		$.each( dataArr, function( idx, val) {
			let gif = dataArr[idx];
			$('.gifHolder').append(`
					<div class="col-xs-10 col-xs-offset-1  col-sm-3 col-md-4 col-lg-3 gifDiv">
						<img id=${term} class="imgGif" src="${gif.images.original_still.url}" alt="a gif of ${term}"/>
						<p class="rating">GIF rating: ${gif.rating}</p>
					</div>
			`);
			
		});
//if the source is still, make it orig. if it's orig, make it still.
//target the end of the src url because that's the difference

		$('.imgGif').each(function(idx) {
				$(this).on("click", function(){
					let src = $(this).attr("src");
					// console.log($(this).attr("src"));
				//use endsWith for string
					if(src.endsWith("s.gif")){
						$(this).attr('src', src.replace('_s.gif', '.gif'));
					} else {
						$(this).attr('src', src.replace('.gif', '_s.gif'));
					}
					//cannot believe that worked! 
				})
			})
	})
});
	
}

loadButtons();

$(document).on("submit","form", function(e){
	e.preventDefault();
	let formVal = $("input").val().trim();
	if ((formVal == '')||(formVal == null)){
		alert("Oops. Just say 'No!' to 'null', numbskull?");
		return;
	} else{
		misc.push(formVal);
		$("input:text").val('');
		loadButtons();
		return false;
	}
	
})


});
//////////////////////////
//////////////////////////
// PSEUDOCODE AND NOTES //
//////////////////////////
//////////////////////////


// 1) create an array of topics. not too many. will populate later with more.

// 2) dynamically load buttons onto page

// 3) add event that listens for btn being clicked.

// 4) retrieve 10 stills from giphy with the topic that is that button's topic (text or set as id)

// 5) clicking on image toggles begtween still and animation

// 6) form with input to add another topic

// 7) newly added topic populates with 10 gifs and the onclick/toggle fcn

// 8) change code so the same 10 aren't always chosen. 

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





// GIF FRAME

// <div class="row gifHolder">
// 	<div class="col-xs-5 col-sm-3 col-md-3 col-lg-3">
// 		<img src="" alt=""/>
// 		<caption class="rating"></caption>
// 	</div>
// </div>