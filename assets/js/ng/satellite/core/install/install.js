(function() {
  'use strict';

  satellite.ng.app.module.run(["$rootScope", "$location", "$alertService", function ($rootScope, $location, $alertService) {

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
  }]);


  satellite.ng.page.installControllerFactory = function ($scope
    , $baseController) {

    var vm = this;

    $.extend(vm, $baseController);

    vm.$scope = $scope;

    vm.initialize = _initialize;

    vm.title = "Install Satellite";

    function _initialize()
    {

    }
  };

  satellite.ng.addController(satellite.ng.app.module
    , "installController"
    , ['$scope', '$baseController']
    , satellite.ng.page.installControllerFactory);

})();
