(function() {
  'use strict';

  var svcObject = function ($baseHttpService)
  {
    var svc = this;

    $.extend( svc, $baseHttpService);

    svc.name = "website";

    svc.create = _create;
    svc.get = _get;
    svc.getBySlug = _getBySlug;
    svc.websiteEntity = _websiteEntity;

    function _websiteEntity(websiteId, entityId, op, onSuccess, onError)
    {
      op = ('remove' == op) ? op : 'add';

      var url = "/" + svc.name + "/" + websiteId + "/entities/" + op + "?id=" + entityId;

      svc._executeRetrieve(url, onSuccess, onError);
    }

    function _create(req, onSuccess, onError)
    {
      var endpoint = "/" + svc.name + "/create";

      svc._executeCreate(endpoint, req, onSuccess, onError);
    }

    function _getBySlug(slug)
    {
      var url = "/" + svc.name;

      var deferred = svc.$q.defer();
//  ?where={"slug":"test2"}
      svc.$http({

        method: "GET",
        url: url,
        params: {where: JSON.stringify({slug:slug})}

      }).then(function(result) {
        deferred.resolve(result);
      }, function(error) {
        deferred.reject(error);
      });

      return deferred.promise;
    }

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
