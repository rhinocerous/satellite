(function() {
  'use strict';

  var svcObject = function ($baseHttpService)
  {
    var svc = this;

    $.extend( svc, $baseHttpService);

    svc.name = "install";

    svc.initialize = _initialize;

    function _initialize()
    {
      var url = "/" + svc.name;

      var deferred = svc.$q.defer();

      svc.$http({

        method: "POST",
        url: url

      }).then(function(result) {

        deferred.resolve(result);
      }, function(error) {
        deferred.reject(error);
      });

      return deferred.promise;

      //svc._executeCreate(url, {}, onSuccess, onError)
    }

    return svc;
  };

  angular.module(SATELLITE)
    .service('$installService'
    , ["$baseHttpService", svcObject]
  );

})();
