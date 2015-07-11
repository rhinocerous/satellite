String.prototype.fromSlug = function()
{
  return this
    .replace('-',' ')
    .replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
};

satellite = {
  ng : {
    page:{},
    app: {
      services: {}
      , controllers: {}
    }
    , exceptions: {}
    , examples: {}
    , defaultDependencies: ['ui.bootstrap','ngRoute']
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

satellite.ng.app.controllers.baseController = function ($doc, $logger, $satellite) {

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

      viewModel.$log.log("setUpCurrentRequest firing:");
      viewModel.$log.debug(viewModel.currentRequest);

    }
  };

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
  , "$baseController"
  , ['$document', '$log', '$satellite']
  , satellite.ng.app.controllers.baseController);


