satellite.ng.page.resumeControllerFactory = function (
  $scope
  , $baseController
  , $istuntService
  , $entityService
) {

  var vm = this;

  $.extend(vm, $baseController);

  vm.$scope = $scope;

  vm.userId = 467;  //  TODO: manage this id and support multiple
  vm.title = "Manage Resume";
  vm.resume = null;
  vm.resumeString = null;
  vm.resumeEntities = null;

  vm.import = _import;

  _init();

  function _init()
  {
    console.log("resume controller init");
  }

  function _import()
  {
    $istuntService.getResume(vm.userId, _onImportSuccess, _onImportError)
  }

  function _onIngestSuccess(response)
  {

  }

  function _onImportSuccess(response)
  {
    vm.resume = response.data;
    vm.resumeString =  JSON.stringify(vm.resume, null,"    ");
    vm.resumeEntities = $istuntService.parseResumeEntities(vm.resume);

    $entityService.ingest(vm.userId, vm.resumeEntities, _onIngestSuccess,_onImportError);
  }

  function _onImportError(data)
  {
    console.error("error getting istunt resume", data);
  }

};

satellite.ng.addController(satellite.ng.app.module
  , "resumeController"
  , ['$scope', '$baseController', '$istuntService','$entityService']
  , satellite.ng.page.resumeControllerFactory);
