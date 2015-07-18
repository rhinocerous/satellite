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

  vm.import = _import;

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

  function _onGetEntitiesSuccess(response)
  {
    vm.schema = response.data;

    console.log("got schema data", vm.schema);
  }

  function _onImportSuccess(response)
  {
    vm.schema = response.data;
    vm.schemaString =  JSON.stringify(vm.schema, null,"    ");
    vm.schemaEntities = vm.$istuntService.parseResumeEntities(vm.schema);

    vm.$entityService.ingest(vm.userId, vm.schemaEntities);
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
