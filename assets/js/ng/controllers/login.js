satellite.ng.page.loginControllerFactory = function (
  $scope
  , $baseController
) {

  var vm = this;

  $.extend(vm, $baseController);

  vm.$scope = $scope;

  vm.login = _login;

  vm.title = "Login from Controller!!";

  _init();

  function _init()
  {
    console.log("login controller init");
  }

  function _login()
  {
    console.log("log in now!!");
  }
};

satellite.ng.addController(satellite.ng.app.module
  , "loginController"
  , ['$scope', '$baseController']
  , satellite.ng.page.loginControllerFactory);
