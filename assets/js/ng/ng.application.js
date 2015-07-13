satellite.ng.app.module.config(function ($routeProvider, $locationProvider) {

  $routeProvider.when('/', {
    templateUrl: '/templates/settings.html',
    controller: 'settingsController',
    controllerAs: 'settings'
  }).when('/about', {
    templateUrl: '/templates/about.html',
    controller: 'bioController',
    controllerAs: 'bio'
  })
  .when('/reel', {
    templateUrl: '/templates/reel.html',
    controller: 'navController',
    controllerAs: 'reelController'
  })
  .when('/resume', {
    templateUrl: '/templates/resume.html',
    controller: 'navController',
    controllerAs: 'resumeController'
  })
  .when('/awards', {
    templateUrl: '/templates/awards.html',
    controller: 'navController',
    controllerAs: 'awardsController'
  })
  .when('/actors', {
    templateUrl: '/templates/actors.html',
    controller: 'navController',
    controllerAs: 'actorsController'
  });

  $locationProvider.html5Mode(false);
});

satellite.ng.page.navigationControllerFactory = function (
  $scope
  , $baseController
  , $route
  , $routeParams) {

  var vm = this;

  $.extend(vm, $baseController);

  vm.$scope = $scope;
  vm.$route = $route;
  vm.$routeParams = $routeParams;

  vm.currentRequestLabel = "Current Request:";

  vm.tabs = [
    { link: '#/', label: 'Settings', icon: 'fa-cogs' },
    { link: '#/about', label: 'About', icon: 'fa-edit' },
    { link: '#/reel', label: 'Reel', icon: 'fa-film' },
    { link: '#/resume', label: 'Resume', icon: 'fa-book' },
    { link: '#/awards', label: 'Awards', icon: 'fa-fire' },
    { link: '#/actors', label: 'Actors', icon: 'fa-bullseye' },

  ];

  vm.selectedTab = vm.tabs[0];

  vm.tabClass = _tabClass;
  vm.setSelectedTab = _setSelectedTab;

  render();

  function render()
  {
    vm.setUpCurrentRequest(vm);

    switch (vm.currentRequest.originalPath) {
      case "/":
        vm.title = "Main Controller";
        vm.message = "hello! welcome to the routes demo. I am the main controller and this is the main page.";
        break;
    }
  }

  function _tabClass (tab) {

    if (vm.selectedTab == tab) {
      return "active";
    } else {
      return "";
    }
  }

  function _setSelectedTab (tab) {
    vm.selectedTab = tab;
  }
};

satellite.ng.page.settingsControllerFactory = function (
  $scope
  , $baseController
  ) {

  var vm = this;

  $.extend(vm, $baseController);

  vm.$scope = $scope;

  vm.title = "Website Settings";

  render();

  function render()
  {
    console.log("settings controller init");
  }
};

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
  , "navController"
  , ['$scope', '$baseController', '$route', '$routeParams']
  , satellite.ng.page.navigationControllerFactory);


satellite.ng.addController(satellite.ng.app.module
  , "settingsController"
  , ['$scope', '$baseController']
  , satellite.ng.page.settingsControllerFactory);

satellite.ng.addController(satellite.ng.app.module
  , "bioController"
  , ['$scope', '$baseController','$settingService']
  , satellite.ng.page.bioControllerFactory);
