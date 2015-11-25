String.prototype.fromSlug = function () {
  return this
    .replace('-', ' ')
    .replace('_', ' ')
    .replace(/_/g, ' ')
    .replace(/\w\S*/g, function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
};

String.prototype.capitalize = function () {
  return this
    .replace('-', ' ')
    .replace('_', ' ')
    .replace(/_/g, ' ')
    .replace(/(?:^|\s)\S/g, function (a) {
      return a.toUpperCase();
    });
};

Array.prototype.unique = function () {
  var a = this.concat();
  for (var i = 0; i < a.length; ++i) {
    for (var j = i + 1; j < a.length; ++j) {
      if (a[i] === a[j])
        a.splice(j--, 1);
    }
  }

  return a;
};
//  module architecture now based on http://stackoverflow.com/a/19957452

(function () {
  "use strict";

  angular.module(SATELLITE,
    ['ui.bootstrap', 'ngRoute', 'ngAnimate', 'textAngular', 'schemaForm', 'toastr', 'ui.select','ngDropzone','angular.chosen']);

})();


(function () {
  "use strict";

  // accessing the module in another.
  // this can be done by calling angular.module without the []-brackets
  angular.module(SATELLITE)
    .filter('slug', function () {
      return function (input) {
        if (input) {
          return input.toLowerCase()
            .replace(/[^\w ]+/g, '')
            .replace(/ +/g, '-');
        }
      }
    })
    .filter('monthPrice', function () {
      return function (input) {
        if (input) {
          var p = Number(input);
          return Math.round(((p * .0199) + p) / 72)
        }
      }
    })
    .constant('MEDIA_QUERY', {
      'desktopLG': 1200,
      'desktop': 992,
      'tablet': 768,
      'mobile': 480
    })
    .constant('EVENT_TYPES',
    {
      OPEN_NAV:"openNav",
      CLOSE_NAV: "closeNav",
      WEBSITE_LOADED:"websiteLoaded"
    }
  );
    //.directive('dropzone', function () {
    //  return function (scope, element, attrs) {
    //    var config, dropzone;
    //
    //    config = scope[attrs.dropzone];
    //
    //    // create a Dropzone for the element with the given options
    //    dropzone = new Dropzone(element[0], config.options);
    //
    //    // bind the given event handlers
    //    angular.forEach(config.eventHandlers, function (handler, event) {
    //      dropzone.on(event, handler);
    //    });
    //  };
    //});


})();

//satellite.ng.app.module.value('$satellite', satellite);

//satellite.ng.exceptions.argumentException = function (msg) {
//  this.message = msg;
//  var err = new Error();
//  console.error(msg + "\n" + err.stack);
//};
//

//satellite.ng.getControllerInstance = function (jQueryObj) {///used to grab an instance of a controller bound to an Element
//  console.log(jQueryObj);
//  return angular.element(jQueryObj[0]).controller();
//};
//
//satellite.ng.addService = function (ngModule, serviceName, dependencies, factory) {
//  /*
//   satellite.ng.app.module.service(
//   '$baseService',
//   ['$window', '$location', '$utils', satellite.ng.app.services.baseService]);
//   */
//  if (!ngModule || !serviceName || !factory || !angular.isFunction(factory)) {
//    throw new satellite.ng.exceptions.argumentException("Invalid Service Call");
//  }
//
//  if (dependencies && !angular.isArray(dependencies)) {
//    throw new satellite.ng.exceptions.argumentException("Invalid Service Call [dependencies]");
//  }
//  else if (!dependencies) {
//    dependencies = [];
//  }
//
//  dependencies.push(factory);
//
//  ngModule.service(serviceName, dependencies);
//
//};
//
//satellite.ng.addController = function (ngModule, controllerName, dependencies, factory) {
//  if (!ngModule || !controllerName || !factory || !angular.isFunction(factory)) {
//    throw new satellite.ng.exceptions.argumentException("Invalid Service defined");
//  }
//
//  if (dependencies && !angular.isArray(dependencies)) {
//    throw new satellite.ng.exceptions.argumentException("Invalid Service Call [dependencies]");
//  }
//  else if (!dependencies) {
//    dependencies = [];
//  }
//
//  dependencies.push(factory);
//  ngModule.controller(controllerName, dependencies);
//
//};
