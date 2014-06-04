require('./helpers/helpers');

var Modules = (function(window) {

  var pageIs = (function(cssClass) {
    if(document.body.className.split(' ').indexOf(cssClass) > -1) return true;
    return false;
  });

  var modules = {
    book      : require('./modules/book')
  };

  window.onload = (function() {

    if(pageIs('single-books')) {
      modules.book({
        single    : document.querySelector('body.single-books'),
        book      : document.querySelector('#book'),
        menu      : document.querySelector('a.menu_toggle'),
        logo      : document.querySelector('.pagetitle_cont a'),
        chapters  : document.querySelector('#chapters')
      });
    }

  });

})(window);