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
  svc.count = {
    entity:0,
    attr:0
  };

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

    svc.outAttr = svc.outAttr.unique();
    svc.outEntity = svc.outEntity.unique();

    _saveAll(svc.outEntity);

    $attributeService.saveAll(svc.outAttr, function(attribute){
      svc.attributes[attribute.slug] = attribute;

      _checkProgress();
    });
  }

  function _saveAll(entities)
  {
    var endpoint = "/" + svc.name + "/create";

    angular.forEach(entities, function(entity, idx) {

      _getBySlug(entity, function(response){
          svc.entities[response.data.slug] = response.data;
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

    _checkProgress();
  }

  function _checkProgress()
  {
    if(Object.keys(svc.entities).length == Object.keys(svc.outEntity).length
      && Object.keys(svc.attributes).length == Object.keys(svc.outAttr).length)
          _mapAssociations()
  }

  function _mapAssociations()
  {
    console.log("MAP ALL ASSOCIATIONS");

    angular.forEach(svc.map, function(attributes, entitySlug) {

      console.log("map %s: %s", entitySlug, attributes.join(", "));

      var entity = svc.entities[entitySlug];

      angular.forEach(attributes, function(attrSlug, idx) {
        var attribute = svc.attributes[attrSlug];

      //  have to use a different GET route here to work around windows bug: https://github.com/balderdashy/sails/issues/2787
      //  http://localhost:1337/entity/1/attributes/add?id=2
         var url = "/" + svc.name + "/" + entity.id + "/attributes/add?id=" + attribute.id;

        svc._executeRetrieve(url, {}, _onAssociateSuccess, svc._handleError);

      });

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

  function _onAssociateSuccess(response)
  {
    console.log("association created", response);
  }
};

satellite.ng.addService(satellite.ng.app.module
  , "$entityService"
  , ["$baseHttpService","$attributeService"]
  , satellite.ng.app.services.entityServiceFactory);
