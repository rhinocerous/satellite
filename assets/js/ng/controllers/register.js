satellite.ng.page.registerControllerFactory = function (
  $scope
  , $baseController
  , $authService
) {

  var vm = this;

  $.extend(vm, $baseController);

  vm.$scope = $scope;
  vm.$authService = $authService;

  vm.register = _register;

  vm.title = "Registration";
  vm.form = null;

  function _register()
  {
    vm.$authService.register(vm.form.username, vm.form.email, vm.form.password)
      .then(_registerSuccess, _registerError);
  }

  function _registerSuccess(user)
  {
    console.log("registration success", user);
  }

  function _registerError(error)
  {
    console.error("registration error", error);
  }
};

satellite.ng.addController(satellite.ng.app.module
  , "registerController"
  , ['$scope', '$baseController',"$authService"]
  , satellite.ng.page.registerControllerFactory);
