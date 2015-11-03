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


    vm.title = "Main Dashboard";
    vm.form = null;

    function _init()
    {

    }

    //function _loginSuccess(response)
    //{
    //  vm.$alertService.success("You are now logged in.", response.user.email);
    //  vm.$location.url("/websites");
    //}
    //
    //function _loginError(error)
    //{
    //  vm.$alertService.error(error.data.message, "Unable to log in :(");
    //  console.error("login error", error);
    //}
  };

  angular.module(SATELLITE)
    .controller('dashboardController'
    , ['$scope', '$baseController', '$authService', vmObject]);

})();

