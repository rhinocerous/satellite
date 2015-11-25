(function() {
  'use strict';

  var svcObject = function ($document, $log, $location, $alertService, $systemEventService, EVENT_TYPES) {

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
    baseController.$systemEventService = $systemEventService;
    baseController.EVENT_TYPES = EVENT_TYPES;

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

    baseController._diffArrays = function(array1, array2)
    {
      var diff =  array1.filter(function(item1) {
        for (var i in array2) {
          if (item1.id === array2[i].id) { return false; }
        };
        return true;
      });

      return diff;
    };

    return baseController;
  };

  angular.module(SATELLITE)
    .service('$baseController'
    , ['$document', '$log','$location', '$alertService', '$systemEventService', 'EVENT_TYPES', svcObject]
  );

})();
