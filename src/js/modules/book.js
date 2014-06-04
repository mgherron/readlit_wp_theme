var Book = (function(DOM) {

  var iOS     = (navigator.userAgent.match(/(iPad|iPhone|iPod)/g) ? true : false);

  var Hammer  = require('../vendor/hammer');

  var classes = document.body.className.split(' ');

  var fontSize = 16;
  var minFontSize = 10;
  var maxFontSize = 32;

  var clickEvent = 'click';

  var hammerOptions = {
    preventDefault: false,
    behavior: {
      userSelect: 'all'
    }
  }

  var open = false;

  if(document.querySelector('html').className.split(' ').indexOf('touch') > -1) {

    // Drag to display sidebar
    Hammer(DOM.single, hammerOptions)
    .on('dragright', function(event) {
      showSidebar();
    })
    .on('dragleft', function(event) {
      hideSidebar();
    });

    Hammer(DOM.book, hammerOptions)
    .on('pinchin', function(event) {

      event.gesture.stopPropagation();
      event.gesture.stopDetect();

      if(fontSize > minFontSize) {
        fontSize--;
        DOM.book.style.fontSize = fontSize + 'px';
      }

    })
    .on('pinchout', function(event) {

      event.gesture.stopPropagation();
      event.gesture.stopDetect();

      if(fontSize < maxFontSize) {
        fontSize++;
        DOM.book.style.fontSize = fontSize + 'px';
      }

    });

    clickEvent = 'touchend';

  }

  DOM.menu.addEventListener(clickEvent, function(event) {
    event.preventDefault();
    toggleSidebar();
  });

  var hideSidebar = (function() {

    var ind = classes.indexOf('show-chapters');
    if(ind > -1) classes.splice(ind, 1);
    document.body.className = classes.join(' ');

  });

  var showSidebar = (function() {

    if(classes.indexOf('show-chapters') === -1) classes.push('show-chapters');
    document.body.className = classes.join(' ');

  });

  var toggleSidebar = (function(event) {   

    DOM.book.addEventListener('webkitTransitionEnd', function Harry(el) {
      console.log(el);
    });

    if(classes.indexOf('show-chapters') > -1) {
      hideSidebar();
      open = false;
    } else {
      showSidebar();
      open = true;
    }

  });

});

module.exports = Book;