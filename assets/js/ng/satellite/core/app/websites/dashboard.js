(function() {
  'use strict';

  var vmObject = function (
    $scope
    , $baseController
    , $routeParams
    , $websitesService
    , $entityService
  ) {

    var vm = this;

    $.extend(vm, $baseController);

    vm.$scope = $scope;
    vm.$websitesService = $websitesService;
    vm.$entityService = $entityService;
    vm.$routeParams = $routeParams;

    vm.title = "Website Dashboard";
    vm.site = null;

    _init();

    function _init()
    {
      vm.$websitesService.getBySlug(vm.$routeParams.websiteSlug)
        .then(_getSuccess, vm._handleError);

    }

    function _getSuccess(response) {
      vm.site = response.data;
    }
  };

  angular.module(SATELLITE)
    .controller('websiteDashController'
    , ['$scope', '$baseController', '$routeParams', '$websitesService', '$entityService', vmObject]);

})();

