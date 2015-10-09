(function() {
  'use strict';

  var vmObject = function (
    $scope
    , $baseController
    , $modal
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
      var modalInstance = $modal.open({
        animation: true,
        templateUrl: '/templates/admin/modal/website.html',
        controller: 'websitesModalController',
        controllerAs: 'modal',
        size: "medium",
        resolve: null
      });

      modalInstance.result.then(function (form) {
        console.log("form data", form);

        vm.$websitesService.create(form, _createSuccess, _createError);

      }, function () {
        console.log('Modal dismissed at: ' + new Date());
      });
    }

    function _createSuccess(response) {
      vm.$alertService.success("Website created");

      console.log("create response", response);

      _init();
    }

    function _createError(error) {

      vm.$alertService.error("Unable to create new website");

      console.error("websites error", error);
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
    , ['$scope', '$baseController', '$modal', '$websitesService', vmObject]);

})();

