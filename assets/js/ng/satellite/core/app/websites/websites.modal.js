(function() {
  'use strict';

  var vmObject = function (
    $scope
    , $baseController
    , $modalInstance
  ) {

    var vm = this;

    $.extend(vm, $baseController); 

    vm.$scope = $scope;
    vm.$modalInstance = $modalInstance;

    vm.submit = _submit;
    vm.cancel = _cancel;

    vm.title = "Website Form";

    vm.formData = {};
    vm.websiteForm = null;

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
      "url",
      {
        "type": "text",
        "placeholder": "Required: full domain name, no http://"
      }
    ];

    vm.schema = {
      "type": "object",
      "title": "Website",
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
        "url": {
          "key":"url",
          "title": "Full Url",
          "type": "string"
        }
      },
      "required": [
        "name",
        "slug",
        "url"
      ]
    };


    function _submit() {

      angular.forEach(vm.websiteForm.$error.required, function(field) {
        field.$setDirty();
      });

      if(vm.websiteForm.$valid)
      {
        console.log("closing modal", vm.formData);

        vm.$modalInstance.close(vm.formData);
      }
    }

    function _cancel() {
      vm.$modalInstance.dismiss('cancel');
    }

  };

  angular.module(SATELLITE)
    .controller('websitesModalController'
    , ['$scope', '$baseController', '$modalInstance', vmObject]);

})();
