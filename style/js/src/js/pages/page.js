var Page = (function() {

  var Hammer  = require('../vendor/hammer');

  var content = document.querySelector('#content');
  var book    = document.querySelector('#book');

  var fontSize = 16;
  var minFontSize = 10;
  var maxFontSize = 32;

  
  // Pinch to resize text
  Hammer(document.body, {
    
    preventDefault: true,
    behavior: {
      userSelect: 'all'
    }

  })
  .on('pinchin', function(event) {

    console.log('in', event);

    event.gesture.stopPropagation();
    event.gesture.stopDetect();

    if(fontSize > minFontSize) {
      fontSize--;
      book.style.fontSize = fontSize + 'px';
    }

  })
  .on('pinchout', function(event) {

    console.log('out', event);

    event.gesture.stopPropagation();
    event.gesture.stopDetect();

    if(fontSize < maxFontSize) {
      fontSize++;
      book.style.fontSize = fontSize + 'px';
    }

  });

  // Drag to display sidebar
  Hammer(content, {

    preventDefault: false,
    behavior: {
      userSelect: 'all'
    }

  })
  .on('dragright', function(event) {

    event.gesture.stopDetect();

    content.className = 'show-chapters';

  })
  .on('dragleft', function(event) {

    event.gesture.stopDetect();

    content.className = '';

  });

});

module.exports = Page;



/**
var viewport = getViewport();

// This MUST be replaced with a @media query.
if (viewport.width < 520 && viewport.width > 791){
  $('.left_main_bottom').css('left','1%');
}

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

// This will be ripped out.
function getViewport() {

  var viewPortWidth;
  var viewPortHeight;

  if (typeof window.innerWidth != 'undefined') {
    viewPortWidth = window.innerWidth,
    viewPortHeight = window.innerHeight
  } else if (typeof document.documentElement != 'undefined' && typeof document.documentElement.clientWidth != 'undefined' && document.documentElement.clientWidth != 0) {
    viewPortWidth = document.documentElement.clientWidth,
    viewPortHeight = document.documentElement.clientHeight
  } else {
    viewPortWidth = document.getElementsByTagName('body')[0].clientWidth,
    viewPortHeight = document.getElementsByTagName('body')[0].clientHeight
  }

  return {
    width: viewPortWidth,
    height: viewPortHeight
  }

}
**/