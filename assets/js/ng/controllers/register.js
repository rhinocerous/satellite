satellite.ng.page.registerControllerFactory = function (
  $scope
  , $baseController
) {

  var vm = this;

  $.extend(vm, $baseController);

  vm.$scope = $scope;

  vm.title = "Registration";

  render();

  function render()
  {
    console.log("registration controller init");
  }
};

satellite.ng.addController(satellite.ng.app.module
  , "registerController"
  , ['$scope', '$baseController']
  , satellite.ng.page.registerControllerFactory);
