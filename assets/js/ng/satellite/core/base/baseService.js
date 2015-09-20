(function() {
  'use strict';

  var svcObject = function ($win, $loc, $util) {

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


  angular.module(SATELLITE)
    .service('$baseService'
    , ['$window', '$location']
    , svcObject
    );

})();
