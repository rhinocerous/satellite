(function () {
  'use strict';

  angular.module(SATELLITE)
    .config(["$routeProvider", "$locationProvider", function ($routeProvider, $locationProvider) {

    $routeProvider.when('/install', {
      templateUrl: '/js/ng/satellite/core/install/index.html',
      controller: 'installController',
      controllerAs: 'install',
      resolve: {

      }
    });

    $locationProvider.html5Mode(false);
  }]);


})();
