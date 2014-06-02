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