(function() {
  'use strict';

  var svcObject = function ($window, $location) {

    var getChangeNotifier = function ($scope) {

      var self = this;

      self.scope = $scope;

      return function (fx) {
        self.scope.$apply(fx);
      }
    };

    var baseService = {
      $window: $window
      , getNotifier: getChangeNotifier
      , $location: $location
    };

    return baseService;
  };


  angular.module(SATELLITE)
    .service('$baseService'
    , ['$window', '$location', svcObject]
    );

})();
