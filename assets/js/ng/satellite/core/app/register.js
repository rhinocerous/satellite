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

    vm.register = _register;

    vm.title = "Registration";
    vm.form = null;

    function _register() {
      vm.$authService.register(vm.form.username, vm.form.email, vm.form.password)
        .then(_registerSuccess, _registerError);
    }

    function _registerSuccess(response) {
      console.log("registration success", response);

      vm.$alertService.success("Your account has been created. Please log in to get started.", response.user.email);

      vm.$location.url("/login");
    }

    function _registerError(error) {
      console.error("registration error", error);
    }
  };

  angular.module(SATELLITE)
    .controller('registerController'
    , ['$scope', '$baseController','$authService', vmObject]);

})();

