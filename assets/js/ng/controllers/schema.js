satellite.ng.page.schemaControllerFactory = function (
  $scope
  , $baseController
  , $istuntService
  , $entityService
  , $modal
) {

  var vm = this;

  $.extend(vm, $baseController);

  vm.$scope = $scope;
  vm.$istuntService = $istuntService;
  vm.$entityService = $entityService;
  vm.$modal = $modal;

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
    console.log("schema controller init");

    vm.$entityService.getByGroup("resume", _onGetEntitiesSuccess, _onError);
  }

  function _import()
  {
    vm.$istuntService.getResume(vm.userId, _onImportSuccess, _onError)
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
    }, function () {
      console.log('Modal dismissed at: ' + new Date());
    });
  }

  function _loadTab(entity)
  {
    vm.currentEntity = entity;

    vm.$entityService.get(vm.currentEntity.id, _onGetCurrentEntitySuccess, _onError);
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

  function _onError(data)
  {
    vm.$alertService.error("Please try again later.", "Unable to load iStunt resume");

    console.error("error getting istunt resume", data);
  }

};

satellite.ng.addController(satellite.ng.app.module
  , "schemaController"
  , ['$scope', '$baseController', '$istuntService','$entityService', '$modal']
  , satellite.ng.page.schemaControllerFactory);
