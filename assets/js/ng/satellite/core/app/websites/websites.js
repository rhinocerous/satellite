(function() {
  'use strict';

  var vmObject = function (
    $scope
    , $baseController
    , $modal
    , $websitesService
    , $entityService
  ) {

    var vm = this;

    $.extend(vm, $baseController);

    vm.$scope = $scope;
    vm.$websitesService = $websitesService;
    vm.$entityService = $entityService;

    vm.showCreate = _showCreate;

    vm.title = "Manage Websites";
    vm.sites = null;
    vm.currentSite = null;
    vm.skeletons = null;

    _init();

    function _init()
    {
      vm.$websitesService.get()
        .then(_getSuccess, vm._handleError);

      _parseSkeletons(vm.$config.config.skeletons);
    }

    function _parseSkeletons(input)
    {
      vm.skeletons = {
        enum:[]
        , obj:{}
      };

      if(input)
      {
        angular.forEach(input, function(value, key) {
          this.enum.push(key);
          this.obj[key] = key;
        }, vm.skeletons);
      }
    }

    function _showCreate()
    {
      var modalInstance = $modal.open({
        animation: true,
        templateUrl: '/templates/admin/modal/website.html',
        controller: 'websitesModalController',
        controllerAs: 'modal',
        size: "medium",
        resolve: {
          skeletons:function(){
            return vm.skeletons;
          }
        }
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

      vm.currentSite = response.data;

      var skeleton = vm.$config.config.skeletons[vm.currentSite.skeleton];

      console.log("install skema", skeleton);


      vm.$entityService.ingest(vm.currentSite.id, skeleton.schema, _onIngestComplete);
    }

    function _onIngestComplete(err, data)
    {
      if(err)
      {
        vm.$alertService.error(err, "Website schema installation failed.");
      }
      else
      {
        vm.$alertService.success("The website schema was installed.");

        vm.$location.url("/websites/" + vm.currentSite.slug);
      }
    }

    function _createError(error) {
      vm.$alertService.error("Unable to create new website");

      console.error("websites error", error);
    }

    function _getSuccess(response) {
      vm.sites = response.data;
    }
  };

  angular.module(SATELLITE)
    .controller('websitesController'
    , ['$scope', '$baseController', '$modal', '$websitesService', '$entityService', vmObject]);

})();

