(function() {
  'use strict';


  var vmObject = function (
    $scope
    , $baseController
    , $istuntService
    , $recordService
    , $entityService
    , $websitesService
    , $authService
    , $modal
    , $routeParams
  ) {

    var vm = this;

    $.extend(vm, $baseController);

    vm.$scope = $scope;
    vm.$istuntService = $istuntService;
    vm.$recordService = $recordService;
    vm.$entityService = $entityService;
    vm.$websitesService = $websitesService;
    vm.$authService = $authService;
    vm.$modal = $modal;
    vm.$routeParams = $routeParams;

    //vm.userId = 467;  //  TODO: manage this id and support multiple
    vm.website = null;
    vm.user = null;
    vm.title = "Manage Values";
    vm.schemaString = null;
    vm.schemaRecords = null;
    vm.records = null;
    vm.selectedRecord = null;
    vm.selectedEntity = null;
    vm.selectedMedias = null;
    vm.entities = null;

    vm.import = _import;
    vm.selectRecord = _selectRecord;
    vm.createRecord = _createRecord;
    vm.loadRecords = _loadRecords;

    //
    _init();

    function _init()
    {
      vm.$websitesService.getBySlug(vm.$routeParams.websiteSlug)
        .then(_getWebsiteSuccess, vm._handleError);

      vm.$authService.getCurrent(_onGetUserSuccess);
    }


    function _onGetUserSuccess(err, user)
    {
      if(err)
      {
        console.error("error on get current user", err);

        vm.$alertService.error("Unable to retrieve user info");
      }
      else
      {
        vm.$alertService.success("User identity loaded");

        vm.user = user;
      }
    }

    function _loadRecords(entity)
    {
      if(typeof entity != 'undefined')
        vm.selectedEntity = entity;

      vm.$recordService.getByWebsiteEntity(vm.website.id, vm.selectedEntity.id, _onGetRecordsSuccess, vm._handleError);
    }

    function _getWebsiteSuccess(response)
    {
      if(response && response.data && response.data.length)
      {
        vm.website = response.data[0];

        vm.$alertService.success(vm.website.name + " schema loaded");

        vm.$systemEventService.broadcast(vm.EVENT_TYPES.WEBSITE_LOADED, vm.website);
      }
      else
      {
        vm.$alertService.warning("No website was loaded, please try again later");
      }
    }

    function _import()
    {
      vm.$istuntService.getResume(vm.userId, _onImportSuccess, _onImportError)
    }

    function _onGetEntityForCreate(response)
    {
      vm.selectedEntity = response.data;
      vm.selectedRecord = {};

      var modalInstance = vm.$modal.open({
        animation: true,
        templateUrl: '/templates/admin/modal/valuesAddRecord.html',
        controller: 'recordModalController as mc',
        size: 'lg',
        resolve: {
          record: function () {
            return vm.selectedRecord;
          },
          entity: function () {
            return vm.selectedEntity;
          },
          website: function () {
            return vm.website;
          }
        }
      });

      modalInstance.result.then(function (data) {

        console.log("save data", data);

        vm.$recordService.create(vm.selectedEntity, [data.record], vm.website, _onCreateRecordsSuccess, vm._handleError);

        vm.selectedRecord = null;
        vm.selectedMedias = data.medias;

      }, function () {

        vm.selectedRecord = null;
      });
    }

    function _createRecord(entity) {

      vm.$entityService.get(entity.id, _onGetEntityForCreate, vm._handleError);
    }

    function _onGetEntityForUpdate(response){

      vm.selectedEntity = response.data;

      var modalInstance = vm.$modal.open({
        animation: true,
        templateUrl: '/templates/admin/modal/valuesAddRecord.html',
        controller: 'recordModalController as mc',
        size: 'lg',
        resolve: {
          record: function () {
            return vm.selectedRecord;
          },
          entity: function () {
            return vm.selectedEntity;
          },
          website: function () {
            return vm.website;
          }
        }
      });

      modalInstance.result.then(function (data) {

        console.log("save data", data);

        vm.$recordService.updateValues(data.record, _onUpdateRecordsSuccess, _onImportError);

        vm.selectedMedias = data.medias;

      }, function () {
        vm.selectedRecord = null;
      });

    }

    function _selectRecord(record) {

      //console.log("entity for update >>>", vm.selectedEntity.id);

      vm.selectedRecord = record;

      vm.$entityService.get(vm.selectedEntity.id, _onGetEntityForUpdate, vm._handleError);
    }

    function _onCreateRecordsSuccess(response)
    {
      vm.selectedRecord = response.data;

      vm.$alertService.success("Record #" + vm.selectedRecord.id + " was created");

      vm.$recordService.addWebsite(vm.selectedRecord.id, vm.website.id, _onAddWebsiteSuccess, vm._handleError);
    }

    function _onAddMediaSuccess(response)
    {
      vm.$alertService.success("Media added -> Record #" + vm.selectedRecord.id);
    }

    function _onAddWebsiteSuccess(response)
    {
      vm.$alertService.success("Record #" + vm.selectedRecord.id +" -> Website #" + vm.website.id);

      vm.$recordService.addUser(vm.selectedRecord.id, vm.user.id, _onAddUserSuccess, vm._handleError);
    }

    function _onAddUserSuccess(response)
    {
      vm.$alertService.success("User #" + vm.user.id +" -> Record #" + vm.selectedRecord.id);

      _linkImages();
    }

    function _linkImages()
    {
      console.log("link selected medias", vm.selectedMedias);

      while(vm.selectedMedias && vm.selectedMedias.length > 0)
      {
        var media = vm.selectedMedias.pop();

        vm.$recordService.addMedia(vm.selectedRecord.id, media.id, _onAddMediaSuccess, vm._handleError);
      }

      _loadRecords();
    }

    function _onUpdateRecordsSuccess(response)
    {
      vm.$alertService.success("The record was updated");

      _linkImages();
    }

    function _onGetEntitiesSuccess(response)
    {
      vm.entities = response.data;

      vm.$alertService.success("Schema loaded");
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

  angular.module(SATELLITE)
    .controller('websiteValuesController'
    , ['$scope', '$baseController', '$istuntService', '$recordService','$entityService', '$websitesService', '$authService', '$modal', '$routeParams', vmObject]);

})();
