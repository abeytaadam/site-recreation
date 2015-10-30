($(document).ready(function(){

	console.log("Sanity Check: JS is working!");


$('.button').click(function(){
	$(this).fadeOut("slow");
	console.log('click');

});

$('img').click(function() {
	$(this).animate({
    width: "140%",
    opacity: 0.1,
  }, 1500 );

});

$( window ).scroll(function(){
	$('.navbar').fadeToggle("slow", "linear");
	console.log("Scroll");
});

$('.h2').mouseover(function() {
	$(this).animate({
		opacity: 0.2,
	}, 400);
});


}));

