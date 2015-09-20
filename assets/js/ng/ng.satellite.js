String.prototype.fromSlug = function()
{
  return this
    .replace('-',' ')
    .replace('_',' ')
    .replace(/_/g, ' ')
    .replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
};

String.prototype.capitalize = function() {
  return this
    .replace('-',' ')
    .replace('_',' ')
    .replace(/_/g, ' ')
    .replace(/(?:^|\s)\S/g, function(a) { return a.toUpperCase(); });
};

Array.prototype.unique = function() {
  var a = this.concat();
  for(var i=0; i<a.length; ++i) {
    for(var j=i+1; j<a.length; ++j) {
      if(a[i] === a[j])
        a.splice(j--, 1);
    }
  }

  return a;
};

satellite = {
  ng : {
    page:{},
    app: {
      prefix:'/api'
      , services: {}
      , controllers: {}
      , sidebar:{}
    }
    , exceptions: {}
    , examples: {}
    , defaultDependencies: ['ui.bootstrap','ngRoute','ngAnimate','textAngular','schemaForm','toastr']
    , getModuleDependencies: function(){
      if (satellite.extraNgDependencies) {
        var newItems = satellite.ng.defaultDependencies.concat(satellite.extraNgDependencies);
        return newItems;
      }
      return satellite.ng.defaultDependencies;
    }
  }
};

satellite.ng.app.module = angular.module('satelliteApp', satellite.ng.getModuleDependencies())
  .filter('slug', function () {
    return function (input) {
      if (input) {
        return input.toLowerCase()
          .replace(/[^\w ]+/g,'')
          .replace(/ +/g,'-');
      }
    }
  })
  .filter('monthPrice', function () {
    return function (input) {
      if (input) {
        var p = Number(input);
        return Math.round(((p *.0199) + p) / 72)
      }
    }
  })
  .constant('MEDIA_QUERY', {
    'desktopLG': 1200,
    'desktop':   992,
    'tablet':    768,
    'mobile':    480
  });


satellite.ng.app.module.directive('dropzone', function () {
  return function (scope, element, attrs) {
    var config, dropzone;

    config = scope[attrs.dropzone];

    // create a Dropzone for the element with the given options
    dropzone = new Dropzone(element[0], config.options);

    // bind the given event handlers
    angular.forEach(config.eventHandlers, function (handler, event) {
      dropzone.on(event, handler);
    });
  };
});

satellite.ng.app.module.value('$satellite', satellite  );

satellite.ng.exceptions.argumentException = function (msg) {
  this.message = msg;
  var err = new Error();
  console.error(msg + "\n" + err.stack);
};

satellite.ng.app.services.baseService = function ($win, $loc, $util) {

  var getChangeNotifier = function ($scope) {

    var self = this;

    self.scope = $scope;

    return function (fx) {
      self.scope.$apply(fx);
    }
  };

  var baseService = {
    $window: $win
    , getNotifier: getChangeNotifier
    , $location: $loc
    , $utils: $util
  };

  return baseService;
};

satellite.ng.app.services.baseHttpService = function ($baseService, $http) {

  var svc = this;

  $.extend( svc, $baseService);

  svc.$http = $http;
  svc._executeUpsert = __executeUpsert;
  svc._executeCreate = __executeCreate;
  svc._executeUpdate = __executeUpdate;
  svc._executeRetrieve = __executeRetrieve;
  svc._handleError = __handleError;

  function __executeUpsert(name, data, success, error ) {

    if(data.id)
    {
      var endpoint = "/" + name + "/update/" + data.id;

      __executeUpdate(endpoint, data, success, error)
    }
    else
    {
      var endpoint = "/" + name + "/create";

      __executeCreate(endpoint, data, success, error)
    }
  }

  function __executeCreate(url, data, success, error ) {

    var request = svc.$http({
      method: "post",
      url: url,
      data: data
    });

    return( request.then( success, error ) );
  }

  function __executeUpdate(url, data, success, error ) {

    var request = svc.$http({
      method: "put",
      url:  url,
      data: data
    });

    return( request.then( success, error ) );
  }

  function __executeRetrieve(url, success, error ) {

    var request = svc.$http({
      method: "get",
      url: url
    });

    return( request.then( success, error ) );
  }

  function __handleError()
  {
    console.error("error handled by base service", arguments);
  }

  return svc;
};

satellite.ng.app.controllers.baseController = function ($doc, $logger, $satellite, $alertService) {

  var baseController = {
    $document: $doc
    , $log: $logger
    , $satellite: $satellite
    , setUpCurrentRequest: function (viewModel) {

      viewModel.currentRequest = { originalPath: "/", isTop: true };

      if (viewModel.$route.current) {
        viewModel.currentRequest = viewModel.$route.current;
        viewModel.currentRequest.locals = {};
        viewModel.currentRequest.isTop = false;
      }

    }
  };

  baseController.$alertService = $alertService;

  return baseController;
};

satellite.ng.getControllerInstance = function (jQueryObj) {///used to grab an instance of a controller bound to an Element
  console.log(jQueryObj);
  return angular.element(jQueryObj[0]).controller();
};

satellite.ng.addService = function (ngModule, serviceName, dependencies, factory) {
  /*
   satellite.ng.app.module.service(
   '$baseService',
   ['$window', '$location', '$utils', satellite.ng.app.services.baseService]);
   */
  if (!ngModule ||
    !serviceName || !factory ||
    !angular.isFunction(factory)) {
    throw new satellite.ng.exceptions.argumentException("Invalid Service Call");
  }

  if (dependencies && !angular.isArray(dependencies)) {
    throw new satellite.ng.exceptions.argumentException("Invalid Service Call [dependencies]");
  }
  else if (!dependencies) {
    dependencies = [];
  }

  dependencies.push(factory);

  ngModule.service(serviceName, dependencies);

};

satellite.ng.addController = function (ngModule, controllerName, dependencies, factory) {
  if (!ngModule ||
    !controllerName || !factory ||
    !angular.isFunction(factory)) {
    throw new satellite.ng.exceptions.argumentException("Invalid Service defined");
  }

  if (dependencies && !angular.isArray(dependencies)) {
    throw new satellite.ng.exceptions.argumentException("Invalid Service Call [dependencies]");
  }
  else if (!dependencies) {
    dependencies = [];
  }

  dependencies.push(factory);
  ngModule.controller(controllerName, dependencies);

};

satellite.ng.addService(satellite.ng.app.module
  , "$baseService"
  , ['$window', '$location']
  , satellite.ng.app.services.baseService);

satellite.ng.addService(satellite.ng.app.module
  , "$baseHttpService"
  , ['$baseService', '$http']
  , satellite.ng.app.services.baseHttpService);

satellite.ng.addService(satellite.ng.app.module
  , "$baseController"
  , ['$document', '$log', '$satellite','$alertService']
  , satellite.ng.app.controllers.baseController);


