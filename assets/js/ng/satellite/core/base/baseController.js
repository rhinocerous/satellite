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

    baseController._handleError = function(err, msg)
    {
      var out = "error handled in base controller";

      if(msg)
        out += " with message [" + msg + "]";

      console.error(out, err);

      if(typeof err.status != 'undefined')
      {
        switch (err.status)
        {
          case 401:
            $alertService.error("Please log in first.");
            $location.url("login");
                break;

          default:
            $alertService.error("That didn't work...");
                break;
        }
      }
      else
      {

      }
    };



    return baseController;
  };

  angular.module(SATELLITE)
    .service('$baseController'
    , ['$document', '$log','$location', '$alertService', svcObject]
  );

})();
