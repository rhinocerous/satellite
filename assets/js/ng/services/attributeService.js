satellite.ng.app.services.attributeServiceFactory = function ($baseHttpService)
{
  var svc = this;

  $.extend( svc, $baseHttpService);

  svc.name = "attribute";

  svc.get = _get;
  svc.getBySlug = _getBySlug;

  function _getBySlug(name, onSuccess, onError)
  {
    var url = "/" + svc.name + "/slug/" + name;

    svc._executeRetrieve(url, onSuccess, onError)
  }

  function _get(id, onSuccess, onError)
  {
    var url = "/" + svc.name + "/" + id;

    svc._executeRetrieve(url, onSuccess, onError)
  }
};

satellite.ng.addService(satellite.ng.app.module
  , "$attributeService"
  , ["$baseHttpService"]
  , satellite.ng.app.services.attributeServiceFactory);
