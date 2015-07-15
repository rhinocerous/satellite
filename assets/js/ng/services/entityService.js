satellite.ng.app.services.entityServiceFactory = function ($baseHttpService)
{
  var svc = this;

  $.extend( svc, $baseHttpService);

  svc.name = "entity";

  svc.ingest = _ingest;
  svc.get = _get;
  svc.getByName = _getByName;

  function _ingest(userId, data, onSuccess, onError)
  {
    console.log("ingest resume entities for user #" + userId, data);

    var output = [];

    angular.forEach(data, function(value, key) {

      var type = value['ur_type'];

      //if(!output[type])
      //{
      //  output[type] = [];
      //
      //  if(value['ur_data'])
      //  {
      //    angular.forEach(value['ur_data'], function(dval, dkey) {
      //      output[type].push(dkey);
      //    });
      //  }
      //}
    });
    //svc._executeCreate(url, data, onSuccess, onError);
  }

  function _getByName(name, onSuccess, onError)
  {
    var url = "/" + svc.name + "/" + name;

    svc._executeRetrieve(url, onSuccess, onError)
  }

  function _get(id, onSuccess, onError)
  {
    var url = "/" + svc.name + "/" + id;

    svc._executeRetrieve(url, onSuccess, onError)
  }
};

satellite.ng.addService(satellite.ng.app.module
  , "$entityService"
  , ["$baseHttpService"]
  , satellite.ng.app.services.entityServiceFactory);
