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

  vm.form = [
    "name",
    "email",
    {
      "key": "comment",
      "type": "textarea",
      "placeholder": "Make a comment"
    },
    {
      "type": "submit",
      "style": "btn-info",
      "title": "OK"
    }
  ];

  vm.schema = {
    "type": "object",
    "title": "Comment",
    "properties": {
      "name": {
        "title": "Name",
        "type": "string"
      },
      "email": {
        "title": "Email",
        "type": "string",
        "pattern": "^\\S+@\\S+$",
        "description": "Email will be used for evil."
      },
      "comment": {
        "title": "Comment",
        "type": "string",
        "maxLength": 20,
        "validationMessage": "Don't be greedy!"
      }
    },
    "required": [
      "name",
      "email",
      "comment"
    ]
  };


  vm.submit = _submit;
  vm.cancel = _cancel;


  console.log("record to edit", vm.record);
  console.log("entity", vm.entity);

  function _submit() {
    vm.$modalInstance.close(vm.record);
  }

  function _cancel() {
    vm.$modalInstance.dismiss('cancel');
  }
};

satellite.ng.addController(satellite.ng.app.module
  , "modalRecordController"
  , ['$scope', '$baseController', '$modalInstance', 'record', 'entity']
  , satellite.ng.page.modalRecordControllerFactory);
