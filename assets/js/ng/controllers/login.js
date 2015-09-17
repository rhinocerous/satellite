satellite.ng.page.loginControllerFactory = function (
  $scope
  , $baseController
  , $authService
  , $location
) {

  var vm = this;

  $.extend(vm, $baseController);

  vm.$scope = $scope;
  vm.$authService = $authService;
  vm.$location = $location;


  vm.login = _login;

  vm.title = "Login";
  vm.form = null;

  function _login()
  {
    vm.$authService.login(vm.form.username, vm.form.password)
      .then(_loginSuccess, _loginError);
  }

  function _loginSuccess(user)
  {
    vm.$alertService.success("Logged in as " + user.email, "Welcome!");
    vm.$location.url("/dashboard");
  }

  function _loginError(error)
  {
    vm.$alertService.error(error.data.message, "Unable to log in :(");
    console.error("login error", error);
  }
};

satellite.ng.addController(satellite.ng.app.module
  , "loginController"
  , ['$scope', '$baseController', '$authService', '$location']
  , satellite.ng.page.loginControllerFactory);
