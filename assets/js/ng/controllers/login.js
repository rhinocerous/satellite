satellite.ng.page.loginControllerFactory = function (
  $scope
  , $baseController
  , $authService
) {

  var vm = this;

  $.extend(vm, $baseController);

  vm.$scope = $scope;

  vm.login = _login;

  vm.title = "Login";
  vm.form = null;

  function _login()
  {
    $authService.login(vm.form.username, vm.form.password)
      .then(_loginSuccess, _loginError);

  }

  function _loginSuccess(user)
  {
    console.log("login success", user);
  }

  function _loginError(error)
  {
    console.error("login error", error);
  }
};

satellite.ng.addController(satellite.ng.app.module
  , "loginController"
  , ['$scope', '$baseController', '$authService']
  , satellite.ng.page.loginControllerFactory);
