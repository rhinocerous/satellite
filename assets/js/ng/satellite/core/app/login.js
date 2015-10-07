(function() {
  'use strict';

  var vmObject = function (
    $scope
    , $baseController
    , $authService
  ) {

    var vm = this;

    $.extend(vm, $baseController);

    vm.$scope = $scope;
    vm.$authService = $authService;

    vm.login = _login;

    vm.title = "Login";
    vm.form = null;

    function _login()
    {
      vm.$authService.login(vm.form.username, vm.form.password)
        .then(_loginSuccess, _loginError);
    }

    function _loginSuccess(response)
    {
      vm.$alertService.success("You are now logged in.", response.user.email);
      vm.$location.url("/websites");
    }

    function _loginError(error)
    {
      vm.$alertService.error(error.data.message, "Unable to log in :(");
      console.error("login error", error);
    }
  };

  angular.module(SATELLITE)
    .controller('loginController'
    , ['$scope', '$baseController', '$authService', vmObject]);

})();

