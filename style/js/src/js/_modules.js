app = {};

app.featureList = document.querySelector("html").className.split(' ');

var Modules = (function() {

  var modules = {
    page : require('./pages/page')
  };

  modules.page();

})();