satellite.ng.page.addEntityModalFactory = function (
  $scope
  , $baseController
  , $modalInstance
) {

  var vm = this;

  $.extend(vm, $baseController);

  vm.$scope = $scope;
  vm.$modalInstance = $modalInstance;

  vm.title = "Adding New Entity";
  vm.form = {};

  vm.ok = function () {
    vm.$modalInstance.close(vm.form);
  };

  vm.cancel = function () {
    vm.$modalInstance.dismiss('cancel');
  };

};

satellite.ng.addController(satellite.ng.app.module
  , "addEntityModalController"
  , ['$scope', '$baseController', '$modalInstance']
  , satellite.ng.page.addEntityModalFactory);
