satellite.ng.page.resumeControllerFactory = function (
  $scope
  , $baseController
  , $istuntService
  , $recordService
  , $modal
) {

  var vm = this;

  $.extend(vm, $baseController);

  vm.$scope = $scope;
  vm.$istuntService = $istuntService;
  vm.$recordService = $recordService;
  vm.$modal = $modal;

  vm.userId = 467;  //  TODO: manage this id and support multiple
  vm.title = "Manage Resume";
  vm.schemaString = null;
  vm.schemaRecords = null;
  vm.records = null;
  vm.selectedRecord = null;
  vm.selectedEntity = null;

  vm.import = _import;
  vm.selectRecord = _selectRecord;

  _init();

  function _init()
  {
    vm.$recordService.getByEntityGroup("resume", _onGetRecordsSuccess, _onImportError);
  }

  function _import()
  {
    vm.$istuntService.getResume(vm.userId, _onImportSuccess, _onImportError)
  }

  function _selectRecord(record, entity) {

    vm.selectedEntity = entity;
    vm.selectedRecord = record;

    var modalInstance = vm.$modal.open({
      animation: true,
      templateUrl: '/templates/content/modalEdit.html',
      controller: 'modalRecordController as mc',
      size: 'lg',
      resolve: {
        record: function () {
          return vm.selectedRecord;
        },
        entity: function () {
          return vm.selectedEntity;
        }
      }
    });

    modalInstance.result.then(function (selectedRecord) {

      console.log("save data", selectedRecord);

      vm.$recordService.updateValues(selectedRecord, _onUpdateRecordsSuccess, _onImportError);

      vm.selectedRecord = null;

    }, function () {

      vm.selectedRecord = null;
      console.log('Modal canceled at: ' + new Date());
    });
  }

  function _onUpdateRecordsSuccess(response)
  {
    console.log("update success", response);

    _init();
  }

  function _onGetRecordsSuccess(response)
  {
    vm.records = response.data;
  }

  function _onImportSuccess(response)
  {
    vm.schemaString =  JSON.stringify(response.data, null,"    ");
    vm.schemaRecords = vm.$istuntService.parseResumeRecords(response.data);

    console.log("parsed records", vm.schemaRecords);

    vm.$recordService.ingest(vm.userId, vm.schemaRecords, _onIngestSuccess,_onImportError);
  }

  function _onIngestSuccess()
  {
    _init();
  }

  function _onImportError(err)
  {
    console.error("error importing records", err);
  }

};

satellite.ng.addController(satellite.ng.app.module
  , "resumeController"
  , ['$scope', '$baseController', '$istuntService', '$recordService', '$modal']
  , satellite.ng.page.resumeControllerFactory);
