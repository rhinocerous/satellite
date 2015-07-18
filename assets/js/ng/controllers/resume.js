satellite.ng.page.resumeControllerFactory = function (
  $scope
  , $baseController
  , $istuntService
  , $recordService
) {

  var vm = this;

  $.extend(vm, $baseController);

  vm.$scope = $scope;
  vm.$istuntService = $istuntService;
  vm.$recordService = $recordService;

  vm.userId = 467;  //  TODO: manage this id and support multiple
  vm.title = "Manage Resume";
  vm.schemaString = null;
  vm.schemaRecords = null;

  vm.import = _import;

  _init();

  function _init()
  {
    console.log("resume controller init");
    //vm.$entityService.getByGroup("resume", _onGetEntitiesSuccess, _onImportError);
  }

  function _import()
  {
    vm.$istuntService.getResume(vm.userId, _onImportSuccess, _onImportError)
  }

  function _onImportSuccess(response)
  {
    vm.schemaString =  JSON.stringify(response.data, null,"    ");
    vm.schemaRecords = vm.$istuntService.parseResumeRecords(response.data);

    console.log("parsed records", vm.schemaRecords);

    vm.$recordService.ingest(vm.userId, vm.schemaRecords, _onIngestSuccess,_onImportError);
  }

  function _onIngestSuccess()
  {
    _init();
  }

  function _onImportError(err)
  {
    console.error("error importing records", err);
  }

};

satellite.ng.addController(satellite.ng.app.module
  , "resumeController"
  , ['$scope', '$baseController', '$istuntService', '$recordService']
  , satellite.ng.page.resumeControllerFactory);
