(function() {
  'use strict';

  var vmObject = function (
    $scope
    , $baseController
    , $modalInstance
    , $formService
    , record
    , entity
    , website) {

    var vm = this;

    $.extend(vm, $baseController);

    vm.$scope = $scope;
    vm.$modalInstance = $modalInstance;
    vm.$formService = $formService;

    vm.record = record;
    vm.entity = entity;
    vm.website = website;
    vm.recordForm = null;

    vm.formDefinition = vm.$formService.parseEntityForm(vm.entity);
    vm.schemaDefinition = vm.$formService.parseEntitySchema(vm.entity);

    vm.submit = _submit;
    vm.cancel = _cancel;

    //console.log("record to edit", vm.record);
    console.log("entity", vm.entity);

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

  angular.module(SATELLITE)
    .controller('addRecordModalController'
    , ['$scope', '$baseController', '$modalInstance', '$formService', 'record', 'entity', 'website', vmObject]);
})();
