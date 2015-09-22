(function() {
  'use strict';

  var module = angular.module(SATELLITE);

  module.run(["$rootScope", "$location", "$alertService", function ($rootScope, $location, $alertService) {

    $rootScope.$on("$routeChangeSuccess", function (event, routeData) {

      if(routeData && routeData.controller == "installController")
        return true;

      //if("installController" != routeData.controller)
      //{
        console.log("route change event", routeData);

        var raw = $("#satellite").html();

        console.log("running install check");

        if (raw && raw.length) {
          var config = JSON.parse(raw);

          console.log("got config from server", config);

          if (config && config.scopes && config.scopes.length > 1)
            return true;
        }

        $alertService.warning("Satellite is currently not installed. Please install and set up a site to continue.");

        $location.url("/install");
      //}
    });
  }]);

  var vmObject = function ($scope
    , $baseController
    , $installService) {

    var vm = this;

    $.extend(vm, $baseController);

    vm.$scope = $scope;
    vm.$installService = $installService;

    vm.initialize = _initialize;

    vm.title = "Install Satellite";

    function _initialize()
    {
      var q = vm.$installService.initialize();

      q.then(function(response){

        vm.$alertService.success("Satellite was successfully initialized.");
        console.log("response from server", response);

      }, function(error){

        var msg = "Satellite failed to initialize";

        if(error.data && error.data.message)
        {
          msg += ": " + error.data.message;
        }
        vm.$alertService.error(msg);

        console.error("response from server", error);

        return false;
      });
    }

    return vm;
  };

  module
    .controller('installController'
    , ['$scope', '$baseController', '$installService', vmObject]
  );


})();
