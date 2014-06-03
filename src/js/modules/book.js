var Book = (function() {

  var iOS     = (navigator.userAgent.match(/(iPad|iPhone|iPod)/g) ? true : false);

  var Hammer  = require('../vendor/hammer');

  var classes = document.body.className.split(' ');

  var single    = document.querySelector('body.single-books');
  var content   = document.querySelector('#content');
  var book      = document.querySelector('#book');
  var menu      = document.querySelector('a.menu_toggle');
  var logo      = document.querySelector('.pagetitle_cont a');
  var chapters  = document.querySelector('#chapters');

  var fontSize = 16;
  var minFontSize = 10;
  var maxFontSize = 32;

  var clickTouchEvent = 'click';

  if(document.querySelector('html').className.split(' ').indexOf('touch') > -1) {

    clickTouchEvent = 'touchstart';

    if(iOS) {

      Hammer(chapters, {

        preventDefault: false,
        behavior: {
          userSelect: 'all'
        }

      })
      .on('tap', function(event) {
        if(event.target && event.target.nodeName === 'A') {
          event.preventDefault();
          var href = event.target.getAttribute('href');
          book.setAttribute('style', '-webkit-overflow-scrolling: none;');
          window.location.hash = href;
          book.removeAttribute('style');
        }
      });

    }

    logo.addEventListener(clickTouchEvent, function(event) {
      event.preventDefault();
      var href = logo.getAttribute('href');
      window.location.href = href;
    });
    
    // Pinch to resize text
    Hammer(single, {
      
      preventDefault: true,
      behavior: {
        userSelect: 'all'
      }

    })
    .on('pinchin', function(event) {

      event.gesture.stopPropagation();
      event.gesture.stopDetect();

      if(fontSize > minFontSize) {
        fontSize--;
        book.style.fontSize = fontSize + 'px';
      }

    })
    .on('pinchout', function(event) {

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
      showSidebar();
    })
    .on('dragleft', function(event) {
      hideSidebar();
    });

  }

  menu.addEventListener(clickTouchEvent, function(event) {
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
    if(classes.indexOf('show-chapters') > -1) {
      hideSidebar();
    } else {
      showSidebar();
    }
  });

});

module.exports = Book;