satellite.ng.page.resumeControllerFactory = function (
  $scope
  , $baseController
  , $istuntService
) {

  var vm = this;

  $.extend(vm, $baseController);

  vm.$scope = $scope;

  vm.title = "Manage Resume";
  vm.resume = null;

  vm.import = _import;

  _init();

  function _init()
  {
    console.log("resume controller init");
  }

  function _import()
  {
    $istuntService.getResume(null, _onImportSuccess, _onImportError)
  }

  function _onImportSuccess(response)
  {
    vm.resume = JSON.stringify(response.data,null,"    ");
  }

  function _onImportError(data)
  {
    console.error("error getting istunt resume", data);
  }

};

satellite.ng.addController(satellite.ng.app.module
  , "resumeController"
  , ['$scope', '$baseController', '$istuntService']
  , satellite.ng.page.resumeControllerFactory);
