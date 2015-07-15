satellite.ng.page.bioControllerFactory = function (
  $scope
  , $baseController
  , $settingService
) {

  var vm = this;

  $.extend(vm, $baseController);

  vm.$scope = $scope;
  vm.$settingService = $settingService;

  vm.title = "Manage Biography";
  vm.settingId = 3; //  TODO: find a better way to manage these EAV fields

  vm.settings = {
    bio:null
  };

  vm.submit = _submit;

  render();

  function render()
  {
    vm.$settingService.get(vm.settingId, _onGetSuccess, _onGetError);
  }

  function _submit()
  {
    vm.$settingService.upsert(vm.settings.bio, _onUpsertSuccess, _onUpsertError);
  }

  function _onGetSuccess(response)
  {
    vm.settings.bio = response.data;
  }

  function _onGetError(response)
  {
    console.error("get fail", response);
  }

  function _onUpsertSuccess(response)
  {
    console.log("upsert success", response);
  }

  function _onUpsertError(response)
  {
    console.error("upsert fail", response);
  }
};

satellite.ng.addController(satellite.ng.app.module
  , "bioController"
  , ['$scope', '$baseController','$settingService']
  , satellite.ng.page.bioControllerFactory);
