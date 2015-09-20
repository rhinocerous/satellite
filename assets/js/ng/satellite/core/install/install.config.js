(function () {
  'use strict';

  satellite.ng.app.module.config(function ($routeProvider, $locationProvider) {

    $routeProvider.when('/install', {
      templateUrl: '/js/ng/satellite/core/install/index.html',
      controller: 'installController',
      controllerAs: 'install',
      resolve: {

      }
    });

    $locationProvider.html5Mode(false);
  });

  satellite.ng.app.module.run(["$rootScope", "$location", function ($rootScope, $location) {


  }]);
})();
