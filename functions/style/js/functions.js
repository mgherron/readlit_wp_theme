$(document).ready(function(){

	$("ul#wp_admin_option_tabs").tabs("#wp_admin_option_content > div", { effect: 'fade'});
	
	$(".section_header span[title]").tooltip({ position: "center left", effect: "fade"});
	
	$("a.pop_out").fancybox({
		'transitionIn'	:	'elastic',
		'transitionOut'	:	'elastic',
		'speedIn'		:	600, 
		'speedOut'		:	200, 
		'overlayColor'  :   '#000',
		'overlayOpacity':   '0.8',
		'titleShow'     :  false,
		'padding' : '0',
		'scrolling' : 'no'
	});
	
});
