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
    vm.media = null;

    vm.formDefinition = vm.$formService.parseEntityForm(vm.entity);
    vm.schemaDefinition = vm.$formService.parseEntitySchema(vm.entity);

    vm.dropzoneConfig = {
      uploadMultiple: false,
      maxFileSize: 10,
      init: function() {

        this.on("addedfile", _onAddedFile);

        this.on("success", _onUploadSuccess);
      }
    };

    vm.submit = _submit;
    vm.cancel = _cancel;

    console.log("record to edit", vm.record);
    console.log("entity", vm.entity);

    function _submit() {
      if(vm.recordForm.$valid)
      {
        vm.$modalInstance.close({
          record:vm.record,
          media: vm.media
        });
      }
    }

    function _onUploadSuccess()
    {
      var response = arguments[1];

      vm.media = response;

      vm.$alertService.success(vm.media.title + " has been saved");
    }

    function _onAddedFile()
    {
      if (this.files[1]!=null){
        console.log("removing file", this.files[0]);
        this.removeFile(this.files[0]);
      }
    }

    function _cancel() {
      vm.$modalInstance.dismiss('cancel');
    }
  };

  angular.module(SATELLITE)
    .controller('recordModalController'
    , ['$scope', '$baseController', '$modalInstance', '$formService', 'record', 'entity', 'website', vmObject]);
})();
