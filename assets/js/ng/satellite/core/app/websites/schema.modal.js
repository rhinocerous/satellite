(function() {
  'use strict';

  var vmObject = function ($scope
    , $baseController
    , $modalInstance) {

    var vm = this;

    $.extend(vm, $baseController);

    vm.$scope = $scope;
    vm.$modalInstance = $modalInstance;

    vm.title = "Adding New Entity";
    vm.addEntityForm = null;
    vm.formData = {};

    vm.form = [
      "name",
      {
        "type": "text",
        "placeholder": "Required"
      },
      "slug",
      {
        "type": "text",
        "placeholder": "Required"
      },
      "group",
      {
        "type": "text",
        "placeholder": "Required"
      },
      "description",
      {
        "type": "text",
        "placeholder": "Required"
      }
    ];

    vm.schema = {
      "type": "object",
      "title": "Entity",
      "properties": {
        "name": {
          "key":"name",
          "title": "Name",
          "type": "string"
        },
        "slug": {
          "key":"slug",
          "title": "Slug",
          "type": "string"
        },
        "group": {
          "key":"group",
          "title": "Group",
          "type": "string"
        }
        ,"description": {
          "key":"description",
          "title": "Description",
          "type": "string"
        }
      },
      "required": [
        "name",
        "slug",
        "group"
      ]
    };


    vm.ok = function () {

      console.log("entity form", vm.addEntityForm);

      angular.forEach(vm.addEntityForm.$error.required, function(field) {
        field.$setDirty();
      });

      if(vm.addEntityForm.$valid)
      {
        vm.$modalInstance.close(vm.formData);
      }
    };

    vm.cancel = function () {
      vm.$modalInstance.dismiss('cancel');
    };

  };

  angular.module(SATELLITE)
    .controller('addEntityModalController'
    , ['$scope', '$baseController', '$modalInstance', vmObject]);

})();
