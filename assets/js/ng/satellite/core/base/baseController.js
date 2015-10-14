(function() {
  'use strict';

  var svcObject = function ($document, $log, $location, $alertService) {

    var raw = $("#satellite").html();
    var config = null;

    if (raw && raw.length)
      config = JSON.parse(raw);

    var baseController = {
      $document: $document
      , $log: $log
      , $location:$location
      , $config:config
      , setUpCurrentRequest: function (viewModel) {

        viewModel.currentRequest = {originalPath: "/", isTop: true};

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

  angular.module(SATELLITE)
    .service('$baseController'
    , ['$document', '$log','$location', '$alertService', svcObject]
  );

})();
