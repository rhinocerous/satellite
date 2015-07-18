satellite.ng.app.services.entityServiceFactory = function ($baseHttpService, $attributeService)
{
  var svc = this;

  $.extend( svc, $baseHttpService);

  svc.$attributeService = $attributeService;

  svc.name = "entity";
  svc.buffer = null;
  svc.outEntity = [];
  svc.outAttr = [];
  svc.map = null;
  svc.entities = {};
  svc.attributes = {};

  svc.ingest = _ingest;
  svc.get = _get;
  svc.getBySlug = _getBySlug;


  function _ingest(userId, data, onSuccess, onError)
  {
    svc.map = data;

    angular.forEach(svc.map, function(attributes, slug) {

      svc.outEntity.push(slug);

      angular.forEach(attributes, function(attr, idx) {
        svc.outAttr.push(attr);
      });
    });

    _saveAll(svc.outEntity.unique());

    $attributeService.saveAll(svc.outAttr.unique(), function(attribute){
      svc.attributes[attribute.slug] = attribute;
    });
    //_saveAllAttr();
  }

  function _saveAll(entities)
  {
    var endpoint = "/" + svc.name + "/create";

    angular.forEach(entities, function(entity, idx) {

      _getBySlug(entity, function(response){
          console.log("slug exists", response.data);
      },
      function(error){

        if(404 == error.status)
        {
          var req = {
            name: entity.fromSlug(),
            slug: entity
          };

          svc._executeCreate(endpoint, req, _onCreateSuccess, svc._handleError);
        }
      })
    });
  }

  function _onCreateSuccess(response)
  {
    var entity = response.data;

    svc.entities[entity.slug] = entity;

    console.log("create success", svc.entities);
  }

  function _saveAllAttr(attrs)
  {
    console.log("save all attr", attrs);
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
  , ["$baseHttpService","$attributeService"]
  , satellite.ng.app.services.entityServiceFactory);
