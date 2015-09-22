(function() {
  'use strict';

  var svcObject = function ($baseHttpService)
  {
    var svc = this;

    $.extend( svc, $baseHttpService);

    svc.name = "attribute";

    svc.get = _get;
    svc.getBySlug = _getBySlug;
    svc.saveAll = _saveAll;

    function _saveAll(attrs, cb)
    {
      var endpoint = "/" + svc.name + "/create";

      angular.forEach(attrs, function(attr, idx) {

        _getBySlug(attr, function(response){
            //  console.log("attr slug exists", response.data);
            cb(response.data);
          },
          function(error){

            if(404 == error.status)
            {
              var req = {
                name: attr.capitalize(),
                slug: attr,
                type:"string"
              };

              svc._executeCreate(endpoint, req, function (createResponse) {
                cb(createResponse.data);
              }, svc._handleError);
            }
          })
      });
    }

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

    return svc;
  };

  angular.module(SATELLITE)
    .service('$attributeService'
    , ["$baseHttpService", svcObject]
  );

})();
