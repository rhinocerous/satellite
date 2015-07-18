satellite.ng.page.schemaControllerFactory = function (
  $scope
  , $baseController
  , $istuntService
  , $entityService
) {

  var vm = this;

  $.extend(vm, $baseController);

  vm.$scope = $scope;
  vm.$istuntService = $istuntService;
  vm.$entityService = $entityService;

  vm.userId = 467;  //  TODO: manage this id and support multiple
  vm.title = "Manage Schema";
  vm.schema = null;
  vm.schemaString = null;
  vm.schemaEntities = null;
  vm.currentEntity = null;
  vm.currentEntityData = null;

  vm.import = _import;
  vm.loadTab = _loadTab;

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

    console.log("got schema data", vm.schema);
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
    _init();
  }

  function _onError(data)
  {
    console.error("error getting istunt resume", data);
  }

};

satellite.ng.addController(satellite.ng.app.module
  , "schemaController"
  , ['$scope', '$baseController', '$istuntService','$entityService']
  , satellite.ng.page.schemaControllerFactory);
