$(document).ready(function(){
	$(".search i").click(function(){
		$(".search_form").toggleClass("re_width form_opacity");
	});/*=====*/

//responsive menubar
$(".responsive_bar").click(function(){
	$(".nav_area,.search") .toggleClass("active");
	
});
	
});/*document ready */