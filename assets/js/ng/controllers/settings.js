satellite.ng.page.settingsControllerFactory = function (
  $scope
  , $baseController
) {

  var vm = this;

  $.extend(vm, $baseController);

  vm.$scope = $scope;

  vm.title = "Website Settings";

  render();

  function render()
  {
    console.log("settings controller init");
  }
};

satellite.ng.addController(satellite.ng.app.module
  , "settingsController"
  , ['$scope', '$baseController']
  , satellite.ng.page.settingsControllerFactory);
