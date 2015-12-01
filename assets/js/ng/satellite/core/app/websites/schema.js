(function() {
  'use strict';

  var vmObject = function (
    $scope
    , $baseController
    , $istuntService
    , $entityService
    , $websitesService
    , $modal
    , $routeParams
    , $attributeService
  ) {

    var vm = this;

    $.extend(vm, $baseController);

    vm.$scope = $scope;
    vm.$istuntService = $istuntService;
    vm.$entityService = $entityService;
    vm.$websitesService = $websitesService;
    vm.$attributeService = $attributeService;
    vm.$modal = $modal;
    vm.$routeParams = $routeParams;

    vm.userId = 467;  //  TODO: manage this id and support multiple
    vm.title = "Manage Schema";
    vm.schema = null;
    vm.schemaString = null;
    vm.schemaEntities = null;
    vm.currentEntity = null;
    vm.currentEntityData = null;
    vm.editMode = false;
    vm.allAttributes = null;
    vm.selectedAttributes = null;
    vm.website = null;

    vm.import = _import;
    vm.loadTab = _loadTab;
    vm.addEntity = _addEntity;
    vm.setEditMode = _setEditMode;
    vm.toggleEditMode = _toggleEditMode;
    vm.loadAllAttributes = _loadAllAttributes;
    vm.changeAttributes = _changeAttributes;

    _init();

    function _init()
    {
      _loadSchema();

      _loadAllAttributes();

      vm.$scope.$watch(
        "schema.currentEntityData.attributes",
        _changeAttributes
      );
    }

    function _changeAttributes(newValue, oldValue)
    {
      if(newValue && oldValue)
      {
        var diff = [];

        if(newValue.length > oldValue.length)
        {
          diff = vm._diffArrays(newValue, oldValue);

          console.log("ADD attr", diff[0].name);

          vm.$entityService.entityAttribute(vm.currentEntity.id, diff[0].id, 'add', _onAddAttrSuccess, vm._handleError);
        }
        else if(newValue.length < oldValue.length)
        {
          diff = vm._diffArrays(oldValue, newValue);

          console.log("REMOVE attr", diff[0].name);

          vm.$entityService.entityAttribute(vm.currentEntity.id, diff[0].id, 'remove', _onRemoveAttrSuccess, vm._handleError);
        }
      }
    }

    function _onAddAttrSuccess()
    {
      vm.$alertService.success("Attribute added to " + vm.currentEntity.name);
    }

    function _onRemoveAttrSuccess()
    {
      vm.$alertService.warning("Attribute removed from " + vm.currentEntity.name);
    }

    function _loadSchema()
    {
      vm.$websitesService.getBySlug(vm.$routeParams.websiteSlug)
        .then(_onGetEntitiesSuccess, vm._handleError);
    }

    function _loadAllAttributes()
    {
      vm.$attributeService.getAll(_onGetAllAttributes, vm._handleError);
    }

    function _onGetAllAttributes(response)
    {
      vm.allAttributes = [];
      var items = response.data;

      angular.forEach(items, function(val, key){
        vm.allAttributes.push(val);
      });
    }

    function _toggleEditMode()
    {
      console.log("toggle edit mode");
      vm.editMode = !vm.editMode;
    }

    function _setEditMode(mode)
    {
      vm.editMode = mode;
    }

    function _import()
    {
      vm.$istuntService.getResume(vm.userId, _onImportSuccess, vm._handleError)
    }

    function _addEntity()
    {
      var modalInstance = $modal.open({
        animation: true,
        templateUrl: '/templates/admin/modal/schemaAddEntity.html',
        controller: 'addEntityModalController',
        controllerAs: 'modal',
        size: "small",
        resolve: null
      });

      modalInstance.result.then(function (form) {

        console.log("form data", form);

        vm.currentEntity = form;

        vm.$entityService.getBySlug(form.slug, _onGetEntityForCreate, _onGetEntityForCreateError);

      }, function () {
        console.log('Modal dismissed at: ' + new Date());
      });
    }

    function _onGetEntityForCreate(response)
    {
      vm.$websitesService.websiteEntity(vm.website.id, response.data.id, 'add', _onCreateEntitySuccess, _onCreateEntityError)
    }

    function _onGetEntityForCreateError(response)
    {
      if(404 == response.status)
        vm.$entityService.create(vm.currentEntity, _onGetEntityForCreate, _onCreateEntityError)
    }

    function _onCreateEntityError(response)
    {
      console.error("create entity error", response);
      vm.$alertService.error("Unable to add the entity.");
    }

    function _onCreateEntitySuccess(response)
    {
      vm.$alertService.success("Entity added to " + vm.website.name);

      _loadSchema();
    }

    function _loadTab(entity)
    {
      vm.currentEntity = entity;

      vm.editMode = false;
      vm.currentEntityData = null;

      vm.$entityService.get(vm.currentEntity.id, _onGetCurrentEntitySuccess, _onError);
    }

    function _onGetCurrentEntitySuccess(response)
    {
      vm.currentEntityData = response.data;
    }

    function _onGetEntitiesSuccess(response)
    {
      vm.website = response.data[0];
      vm.schema = vm.website.entities;

      vm.$systemEventService.broadcast(vm.EVENT_TYPES.WEBSITE_LOADED, vm.website);
    }

    function _onImportSuccess(response)
    {
      var raw = response.data;
      vm.schemaString =  JSON.stringify(raw, null,"    ");
      vm.schemaEntities = vm.$istuntService.parseResumeEntities(raw);

      vm.$entityService.ingest(vm.website.id, vm.schemaEntities, _onIngestSuccess);
    }

    function _onIngestSuccess()
    {
      vm.$alertService.success("We were able to pull your resume from iStunt.");

      _init();
    }

    function _onError(error)
    {
      vm.$alertService.error("An error occurred", (error.message) ? error.message : error);

      console.error("error occurred", error);
    }

    function _onIstuntError(data)
    {
      vm.$alertService.error("Please try again later.", "Unable to load iStunt resume");

      console.error("error getting istunt resume", data);
    }
  };

  angular.module(SATELLITE)
    .controller('websiteSchemaController'
    ,  ['$scope', '$baseController', '$istuntService','$entityService', '$websitesService', '$modal', '$routeParams', '$attributeService', vmObject]);

})();
