(function () {
  'use strict';

  var module = angular.module(SATELLITE);

  module.config(function ($routeProvider, $locationProvider) {

    $routeProvider.when('/install', {
      templateUrl: '/js/ng/satellite/core/install/index.html',
      controller: 'installController',
      controllerAs: 'install',
      resolve: {

      }
    });

    $locationProvider.html5Mode(false);
  });


})();
