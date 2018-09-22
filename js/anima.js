$(document).ready(function(){
	
var bounceInLeft = "animated bounceInLeft";
var fadeIn = "animated fadeIn";
var zoomIn = "animated zoomIn";
var rubberBand = "animated rubberBand";

	/*Home*/
		/*Slide*/
	$h2 = $('.h2');
	$h2.waypoint(function(){
		$h2.addClass(bounceInLeft);
		$h2.addClass('js-animate');
	}, {offset:'80%'});

	$p = $('.p');
	$p.waypoint(function(){
		$p.addClass(fadeIn);
		$p.addClass('js-animate');
	}, {offset:'80%'});

		/*Veja como é simples contratar*/

	$h2_home = $('.h2-video');
	$h2_home.waypoint(function(){
		$h2_home.addClass(bounceInLeft);
		$h2_home.addClass('js-animate');
	}, {offset: '80%'});

	$p_exp = $('#p-exp');
	$p_exp.waypoint(function(){
		$p_exp.addClass(fadeIn);
		$p_exp.addClass('js-animate');
	}, {offset: '80%'});

		/*Ícones*/

	$section_icons = $('.section-icons');
	$section_icons.waypoint(function(){
		$section_icons.addClass(fadeIn);
		$section_icons.addClass('js-animate');
	}, {offset: '80%'});

		/*Clientes*/
	$h2_clientes = $('.h2-clientes');
	$h2_clientes.waypoint(function(){
		$h2_clientes.addClass(zoomIn);
		$h2_clientes.addClass('js-animate');
	}, {offset: '80%'});

	$fotos_clientes = $('.fotos-clientes');
	$fotos_clientes.waypoint(function(){
		$fotos_clientes.addClass(rubberBand);
		$fotos_clientes.addClass('js-animate');
	}, {offset: '80%'});	
});