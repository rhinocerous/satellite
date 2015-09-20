(function() {
  'use strict';

  var svcObject = function ($baseHttpService)
  {
    var svc = this;

    $.extend( svc, $baseHttpService);

    svc.name = "setting";

    svc.upsert = _upsert;
    svc.get = _get;

    function _upsert(data, onSuccess, onError)
    {
      svc._executeUpsert(svc.name, data, onSuccess, onError);
    }

    function _get(id, onSuccess, onError)
    {
      var url = "/" + svc.name + "/" + id;

      svc._executeRetrieve(url, onSuccess, onError)
    }
  };

  angular.module(SATELLITE)
    .service('$settingService'
    , ["$baseHttpService"]
    , svcObject
  );

})();
