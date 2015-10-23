(function() {
  'use strict';

  var vmObject = function (
    $scope
    , $baseController
    , $istuntService
    , $entityService
    , $modal
    , $routeParams
  ) {

    var vm = this;

    $.extend(vm, $baseController);

    vm.$scope = $scope;
    vm.$istuntService = $istuntService;
    vm.$entityService = $entityService;
    vm.$modal = $modal;
    vm.$routeParams = $routeParams;

    vm.userId = 467;  //  TODO: manage this id and support multiple
    vm.title = "Manage Schema";
    vm.schema = null;
    vm.schemaString = null;
    vm.schemaEntities = null;
    vm.currentEntity = null;
    vm.currentEntityData = null;

    vm.import = _import;
    vm.loadTab = _loadTab;
    vm.addEntity = _addEntity;

    _init();

    function _init()
    {
      //vm.$entityService.getByGroup("resume", _onGetEntitiesSuccess, _onError);

      vm.$entityService.getByWebsite(vm.$routeParams.websiteSlug, _onGetEntitiesSuccess, vm._handleError);
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

        vm.$entityService.create(form, _onCreateEntitySuccess, _onError)
      }, function () {
        console.log('Modal dismissed at: ' + new Date());
      });
    }

    function _loadTab(entity)
    {
      vm.currentEntity = entity;

      vm.$entityService.get(vm.currentEntity.id, _onGetCurrentEntitySuccess, _onError);
    }

    function _onCreateEntitySuccess(response)
    {

    }

    function _onGetCurrentEntitySuccess(response)
    {
      vm.currentEntityData = response.data;
    }

    function _onGetEntitiesSuccess(response)
    {
      vm.schema = response.data;

      vm.$alertService.success("Schema loaded");
    }

    function _onImportSuccess(response)
    {
      var raw = response.data;
      vm.schemaString =  JSON.stringify(raw, null,"    ");
      vm.schemaEntities = vm.$istuntService.parseResumeEntities(raw);

      vm.$entityService.ingest(vm.userId, vm.schemaEntities, _onIngestSuccess);
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
    ,  ['$scope', '$baseController', '$istuntService','$entityService', '$modal', '$routeParams', vmObject]);

})();
