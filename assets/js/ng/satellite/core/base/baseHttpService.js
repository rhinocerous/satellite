(function() {
  'use strict';

  var svcObject = function ($baseService, $http) {

    var svc = this;

    $.extend(svc, $baseService);

    svc.$http = $http;
    svc._executeUpsert = __executeUpsert;
    svc._executeCreate = __executeCreate;
    svc._executeUpdate = __executeUpdate;
    svc._executeRetrieve = __executeRetrieve;
    svc._handleError = __handleError;

    function __executeUpsert(name, data, success, error) {

      if (data.id) {
        var endpoint = "/" + name + "/update/" + data.id;

        __executeUpdate(endpoint, data, success, error)
      }
      else {
        var endpoint = "/" + name + "/create";

        __executeCreate(endpoint, data, success, error)
      }
    }

    function __executeCreate(url, data, success, error) {

      var request = svc.$http({
        method: "post",
        url: url,
        data: data
      });

      return ( request.then(success, error) );
    }

    function __executeUpdate(url, data, success, error) {

      var request = svc.$http({
        method: "put",
        url: url,
        data: data
      });

      return ( request.then(success, error) );
    }

    function __executeRetrieve(url, success, error) {

      var request = svc.$http({
        method: "get",
        url: url
      });

      return ( request.then(success, error) );
    }

    function __handleError() {
      console.error("error handled by base service", arguments);
    }

    return svc;
  };

  angular.module(SATELLITE)
    .service('$baseHttpService'
    , ['$baseService', '$http']
    , svcObject
  );

})();