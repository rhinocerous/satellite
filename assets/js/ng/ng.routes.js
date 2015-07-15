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
    controller: 'resumeController',
    controllerAs: 'resume'
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
