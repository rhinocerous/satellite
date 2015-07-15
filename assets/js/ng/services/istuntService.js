satellite.ng.app.services.istuntServiceFactory = function ($baseHttpService)
{
  var svc = this;

  $.extend( svc, $baseHttpService);

  svc.getResume = _getResume;
  svc.parseResumeEntities = _parseResumeEntities;

  function _getResume(id, onSuccess, onError)
  {
    var url = "/export";

    svc._executeRetrieve(url, onSuccess, onError)
  }

  function _parseResumeEntities(data)
  {
    var output = [];

    angular.forEach(data, function(value, key) {

      var type = value['ur_type'];

      if(!output[type])
      {
        output[type] = [];

        if(value['ur_data'])
        {
          angular.forEach(value['ur_data'], function(dval, dkey) {
            output[type].push(dkey);
          });
        }
      }
    });

    return output;
  }
};

satellite.ng.addService(satellite.ng.app.module
  , "$istuntService"
  , ["$baseHttpService"]
  , satellite.ng.app.services.istuntServiceFactory);
