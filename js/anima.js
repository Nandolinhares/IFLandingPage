$(document).ready(function(){
	
var bounceInLeft = "animated bounceInLeft";
var fadeIn = "animated fadeIn";
var fadeInDown = "animated fadeInDown";
var fadeInRightBig = "animated fadeInRightBig"

	
	$logo = $('.logo');
	$logo.waypoint(function(){
		$logo.addClass(bounceInLeft);
		$logo.addClass('js-animate');
	}, {offset:'90%'});

	$h21 = $('.h21');
	$h21.waypoint(function(){
		$h21.addClass(fadeInRightBig);
		$h21.addClass('js-animate');
	}, {offset:'90%'});


	$icon = $('.icon');
	$icon.waypoint(function(){
		$icon.addClass(fadeIn);
		$icon.addClass('js-animate');
	}, {offset: '90%'});

	$logo_bou = $('.logo_bou');
	$logo_bou.waypoint(function(){
		$logo_bou.addClass(fadeIn);
		$logo_bou.addClass('js-animate');
	}, {offset: '90%'});

	$logo_chilli = $('.logo_chilli');
	$logo_chilli.waypoint(function(){
		$logo_chilli.addClass(fadeIn);
		$logo_chilli.addClass('js-animate');
	}, {offset: '90%'});

	$mc_embed_signup = $('#mc_embed_signup');
	$mc_embed_signup.waypoint(function(){
		$mc_embed_signup.addClass(fadeInDown);
		$mc_embed_signup.addClass('js-animate');
	}, {offset: '90%'});

	$organizador = $('.organizador');
	$organizador.waypoint(function(){
		$organizador.addClass(bounceInLeft);
		$organizador.addClass('js-animate');
	}, {offset:'90%'});
});