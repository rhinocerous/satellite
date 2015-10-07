(function() {
  'use strict';

  var svcObject = function ($baseHttpService)
  {
    var svc = this;

    $.extend( svc, $baseHttpService);

    svc.name = "website";

    svc.get = _get;

    function _get(id)
    {
      var url = "/" + svc.name;

      if(id)
        url += "/" + id;

      var deferred = svc.$q.defer();

      svc.$http({

        method: "GET",
        url: url

      }).then(function(result) {
        deferred.resolve(result);
      }, function(error) {
        deferred.reject(error);
      });

      return deferred.promise;
    }

    return svc;
  };

  angular.module(SATELLITE)
    .service('$websitesService'
    , ["$baseHttpService", svcObject]
  );

})();
