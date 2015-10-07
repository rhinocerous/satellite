(function() {
  'use strict';

  var vmObject = function (
    $scope
    , $baseController
    , $websitesService
  ) {

    var vm = this;

    $.extend(vm, $baseController);

    vm.$scope = $scope;
    vm.$websitesService = $websitesService;

    vm.showCreate = _showCreate;

    vm.title = "Manage Websites";
    vm.sites = null;

    _init();

    function _init()
    {
      vm.$websitesService.get()
        .then(_getSuccess, _getError);
    }

    function _showCreate()
    {
      console.log("show website modal");
    }

    function _getSuccess(response) {
      vm.sites = response.data;
    }

    function _getError(error) {

      vm.$alertService.error("Unable to retrieve websites");

      console.error("websites error", error);
    }
  };

  angular.module(SATELLITE)
    .controller('websitesController'
    , ['$scope', '$baseController', '$websitesService', vmObject]);

})();

