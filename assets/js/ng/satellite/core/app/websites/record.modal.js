(function() {
  'use strict';

  var vmObject = function (
    $scope
    , $baseController
    , $modalInstance
    , $formService
    , $mediaService
    , record
    , entity
    , website) {

    var vm = this;

    $.extend(vm, $baseController);

    vm.$scope = $scope;
    vm.$modalInstance = $modalInstance;
    vm.$formService = $formService;
    vm.$mediaService = $mediaService;

    vm.record = record;
    vm.entity = entity;
    vm.website = website;
    vm.recordForm = null;
    vm.medias = (vm.record.medias || []);

    vm.formDefinition = vm.$formService.parseEntityForm(vm.entity);
    vm.schemaDefinition = vm.$formService.parseEntitySchema(vm.entity);

    vm.dropzoneConfig = {
      uploadMultiple: false,
      maxFileSize: 10,
      url:"/website/" + vm.website.id +"/media/upload",
      addRemoveLinks: true,
      removedfile: _onRemovedFile,
      init: _dropzoneInit
    };

    vm.submit = _submit;
    vm.cancel = _cancel;

    console.log("record to edit", vm.record);
    //console.log("entity", vm.entity);

    function _submit() {
      if(vm.recordForm.$valid)
      {
        vm.$modalInstance.close({
          record:vm.record,
          medias: vm.medias
        });
      }
    }

    function _onUploadSuccess()
    {
      var response = arguments[1];

      vm.medias.push(response);

      vm.$alertService.success(response.title + " has been saved");
    }

    function _dropzoneInit()
    {
      //this.on("addedfile", _onAddedFile);
      this.on("success", _onUploadSuccess);

      //  based on http://stackoverflow.com/a/25179408
      if (vm.medias.length > 0) {
        for (var i = 0; i < vm.medias.length; i++) {
          var media = vm.medias[i];

          var row = {
            name: media.title,
            size: media.size,
            type: media.mime,
            status: Dropzone.ADDED,
            url: media.url,
            id:media.id
          };

          // Call the default addedfile event handler
          this.emit("addedfile", row);

          // And optionally show the thumbnail of the file:
          this.emit("thumbnail", row, row.url);

          this.files.push(row);
        }
      }

      this.on("removedfile", function (file) {
        // Only files that have been programmatically added should
        // have a url property.
        if (file.url && file.url.trim().length > 0) {
          $("<input type='hidden'>").attr({
            id: 'DeletedImageUrls',
            name: 'DeletedImageUrls'
          }).val(file.url).appendTo('#image-form');
        }
      });

    }

    function _onRemovedFile(file)
    {
      if(file.id)
      {
        vm.$mediaService.delete(file.id, _onDeleteFileSucces, vm._handleError);
      }

      var _ref;
      return (_ref = file.previewElement) != null ? _ref.parentNode.removeChild(file.previewElement) : void 0;
    }

    function _onDeleteFileSucces(response)
    {
      vm.$alertService.success("Media deleted");
    }

    //  activate this if we only want one media per record, this will enforce in UI
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
    , ['$scope', '$baseController', '$modalInstance', '$formService', '$mediaService', 'record', 'entity', 'website', vmObject]);
})();
