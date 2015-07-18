satellite.ng.app.services.entityServiceFactory = function ($baseHttpService)
{
  var svc = this;

  $.extend( svc, $baseHttpService);

  svc.name = "entity";
  svc.buffer = null;

  svc.ingest = _ingest;
  svc.get = _get;
  svc.getBySlug = _getBySlug;


  function _ingest(userId, data, onSuccess, onError)
  {
    console.log("ingest resume entities for user #" + userId, data);

    var output = [];

    var endpoint = "/" + svc.name + "/ingest";

    angular.forEach(data, function(attributes, slug) {

      var attrs = [];

      angular.forEach(attributes, function(av, ak) {
        attrs.push({
          name: av.fromSlug(),
          slug: av
        })
      });

      var req = {
        name: slug.fromSlug(),
        slug: slug,
        attributes: attrs
      };

      output.push(req);
    });

    svc._executeCreate(endpoint, output, _createSuccess, svc._handleError);
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

  function _createSuccess(response)
  {
    console.log("entity created", response);
  }
};

satellite.ng.addService(satellite.ng.app.module
  , "$entityService"
  , ["$baseHttpService"]
  , satellite.ng.app.services.entityServiceFactory);
