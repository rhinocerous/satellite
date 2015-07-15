satellite.ng.app.services.istuntServiceFactory = function ($baseHttpService)
{
  var svc = this;

  $.extend( svc, $baseHttpService);

  svc.getResume = _getResume;

  function _getResume(id, onSuccess, onError)
  {
    var url = "/export";

    svc._executeRetrieve(url, onSuccess, onError)
  }
};

satellite.ng.addService(satellite.ng.app.module
  , "$istuntService"
  , ["$baseHttpService"]
  , satellite.ng.app.services.istuntServiceFactory);
