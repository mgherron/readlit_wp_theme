jQuery(document).ready(function($) {

  var cssTrans = ($('html').hasClass('csstransitions'));

	getViewport();

	if (viewPortHeight<520 && viewPortWidth>791){

	   $('.left_main_bottom').css('left','1%');

	}

	var counts = 0;

	$(document).on('click', '.menu_toggle.open', function() {

			if(cssTrans) {
        $('.main-area').addClass('out');
        $('.book_sidebar').addClass('in');
      } else {
			  $('.main-area').animate({ left : '200px' }, 200);
			  $('.book_sidebar').animate({ left : '0px' }, 200);
      }
      
			$('.menu_toggle').addClass('close').removeClass('open');

		

	});

	$(document).on('click', '.menu_toggle.close', function() {

    if(cssTrans) {
      $('.main-area').removeClass('out');
      $('.book_sidebar').removeClass('in');
    } else {
		  $('.main-area').animate({ left : '0px' }, 200);
		  $('.book_sidebar').animate({ left : '-200px' }, 200);
    }
    
		$('.menu_toggle').addClass('open').removeClass('close');

	});

});

var viewPortWidth;

 var viewPortHeight;

function getViewport() {



 // the more standards compliant browsers (mozilla/netscape/opera/IE7) use window.innerWidth and window.innerHeight

 if (typeof window.innerWidth != 'undefined') {

   viewPortWidth = window.innerWidth,

   viewPortHeight = window.innerHeight

 }



// IE6 in standards compliant mode (i.e. with a valid doctype as the first line in the document)

 else if (typeof document.documentElement != 'undefined'

 && typeof document.documentElement.clientWidth !=

 'undefined' && document.documentElement.clientWidth != 0) {

    viewPortWidth = document.documentElement.clientWidth,

    viewPortHeight = document.documentElement.clientHeight

 }



 // older versions of IE

 else {

   viewPortWidth = document.getElementsByTagName('body')[0].clientWidth,

   viewPortHeight = document.getElementsByTagName('body')[0].clientHeight

 }



 return [viewPortWidth, viewPortHeight];

}