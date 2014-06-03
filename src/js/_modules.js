require('./helpers/helpers');

var Modules = (function() {

  var modules = {
    book : require('./modules/book')
  };

  modules.book();

})();