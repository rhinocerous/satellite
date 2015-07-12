satellite.ng.app.module.config(function ($routeProvider, $locationProvider) {

  $routeProvider.when('/', {
    templateUrl: '/templates/settings.html',
    controller: 'navController',
    controllerAs: 'settings'
  }).when('/about', {
    templateUrl: '/templates/about.html',
    controller: 'navController',
    controllerAs: 'aboutController'
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
    { link: '#/', label: 'Settings', icon: 'icon-tools-2' },
    { link: '#/about', label: 'About', icon: 'icon-pencil' },
    { link: '#/reel', label: 'Reel', icon: 'icon-video' },
    { link: '#/resume', label: 'Resume', icon: 'icon-strategy' },
    { link: '#/awards', label: 'Awards', icon: 'icon-trophy' },
    { link: '#/actors', label: 'Actors', icon: 'icon-genius' },

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
        vm.heading = "Main Controller";
        vm.message = "hello! welcome to the routes demo. I am the main controller and this is the main page.";
        break;

      case "/about":
        vm.heading = "About Us";
        vm.message = "This text is coming from the main controller also but it's changing because of the new route. It's the same controller but it loads a different template into ng-view.";
        break;

      case "/query":
        vm.heading = "Querystring parameters are key/value pairs.";
        vm.message = "They are passed in the URL of the page on GET requests. Notice how Angular captures all of these params in a variable which you can access as $route.current.params.";
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

satellite.ng.addController(satellite.ng.app.module
  , "navController"
  , ['$scope', '$baseController', '$route', '$routeParams']
  , satellite.ng.page.navigationControllerFactory);
