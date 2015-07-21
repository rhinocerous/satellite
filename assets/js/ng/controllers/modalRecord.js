satellite.ng.page.modalRecordControllerFactory = function (
  $scope
  , $baseController
  , $modalInstance
  , $formService
  , record
  , entity) {

  var vm = this;

  $.extend(vm, $baseController);

  vm.$scope = $scope;
  vm.$modalInstance = $modalInstance;
  vm.$formService = $formService;

  vm.record = record;
  vm.entity = entity;
  vm.recordForm = null;

  vm.formDefinition = vm.$formService.parseEntityForm(vm.entity);
  vm.schemaDefinition = vm.$formService.parseEntitySchema(vm.entity);

  vm.submit = _submit;
  vm.cancel = _cancel;

  //console.log("record to edit", vm.record);
  //console.log("entity", vm.entity);

  function _submit() {
    if(vm.recordForm.$valid)
    {
      vm.$modalInstance.close(vm.record);
    }
  }

  function _cancel() {
    vm.$modalInstance.dismiss('cancel');
  }
};

satellite.ng.addController(satellite.ng.app.module
  , "modalRecordController"
  , ['$scope', '$baseController', '$modalInstance', '$formService', 'record', 'entity']
  , satellite.ng.page.modalRecordControllerFactory);
