satellite.ng.page.modalRecordControllerFactory = function (
  $scope
  , $baseController
  , $modalInstance
  , record
  , entity) {

  var vm = this;

  $.extend(vm, $baseController);

  vm.$scope = $scope;
  vm.$modalInstance = $modalInstance;

  vm.record = record;
  vm.entity = entity;

  vm.submit = _submit;
  vm.cancel = _cancel;


  function _submit() {
    vm.$modalInstance.close(vm.record);
  }

  function _cancel() {
    vm.$modalInstance.dismiss('cancel');
  }
};

satellite.ng.addController(satellite.ng.app.module
  , "modalRecordController"
  , ['$scope', '$baseController', '$modalInstance', 'record']
  , satellite.ng.page.modalRecordControllerFactory);
