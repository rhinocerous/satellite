satellite.ng.page.resumeControllerFactory = function (
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
  vm.title = "Manage Resume";
  vm.schema = null;
  vm.schemaString = null;
  vm.schemaEntities = null;

  //vm.import = _import;

  //_init();
  //
  //function _init()
  //{
  //  console.log("resume controller init");
  //  vm.$entityService.getByGroup("resume", _onGetEntitiesSuccess, _onImportError);
  //}
  //
  //function _import()
  //{
  //  vm.$istuntService.getResume(vm.userId, _onImportSuccess, _onImportError)
  //}
  //
  //function _onGetEntitiesSuccess(response)
  //{
  //  vm.schema = response.data;
  //
  //  console.log("got resume data", vm.schema);
  //}
  //
  //function _onIngestSuccess(response)
  //{
  //
  //}
  //
  //function _onImportSuccess(response)
  //{
  //  vm.schema = response.data;
  //  vm.schemaString =  JSON.stringify(vm.schema, null,"    ");
  //  vm.schemaEntities = vm.$istuntService.parseResumeEntities(vm.schema);
  //
  //  vm.$entityService.ingest(vm.userId, vm.schemaEntities, _onIngestSuccess,_onImportError);
  //}
  //
  //function _onImportError(data)
  //{
  //  console.error("error getting istunt resume", data);
  //}

};

satellite.ng.addController(satellite.ng.app.module
  , "resumeController"
  , ['$scope', '$baseController', '$istuntService','$entityService']
  , satellite.ng.page.resumeControllerFactory);
