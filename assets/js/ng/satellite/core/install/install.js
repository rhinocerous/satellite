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
    , $installService
    , $location) {

    var vm = this;

    $.extend(vm, $baseController);

    vm.$scope = $scope;
    vm.$installService = $installService;
    vm.$location = $location;

    vm.initialize = _initialize;

    vm.title = "Install Satellite";

    function _initialize()
    {
      var q = vm.$installService.initialize();

      q.then(function(response){

        vm.$alertService.success("Please register a new account then log in to continue.");
        vm.$alertService.success("Satellite was successfully initialized.");

        console.log("response from server", response);

        $("#satellite").html(JSON.stringify({scopes:response.data.items}));

        vm.$location.url("/register");

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
    , ['$scope', '$baseController', '$installService', '$location', vmObject]
  );


})();
