satellite.ng.app.services.valueServiceFactory = function (
  $baseHttpService
, $attributeService)
{
  var svc = this;

  $.extend( svc, $baseHttpService);

  svc.$attributeService = $attributeService;

  svc.name = "value";

  svc.ingest = _ingest;
  svc.get = _get;

  function _ingest(entity, data, cb)
  {
    console.log("ingest values", data);
    console.log("for entity", entity);

    cb();
  }

  function _get(id, onSuccess, onError)
  {
    var url = "/" + svc.name + "/" + id;

    svc._executeRetrieve(url, onSuccess, onError)
  }
};

satellite.ng.addService(satellite.ng.app.module
  , "$valueService"
  , ["$baseHttpService", "$attributeService"]
  , satellite.ng.app.services.valueServiceFactory);
