(function() {
  'use strict';

  var svcObject = function ($baseHttpService)
  {
    var svc = this;

    $.extend( svc, $baseHttpService);

    svc.name = "media";

    svc.delete = _delete;

    function _delete(id, onSuccess, onError)
    {
      var url = "/" + svc.name + "/" + id;

      svc._executeDelete(url, null, onSuccess, onError)
    }

    return svc;
  };

  angular.module(SATELLITE)
    .service('$mediaService'
    , ["$baseHttpService", svcObject]
  );

})();
