satellite.ng.app.module.config(function ($routeProvider, $locationProvider) {

  $routeProvider.when('/', {
    templateUrl: '/templates/admin/settings.html',
    controller: 'settingsController',
    controllerAs: 'settings'
  }).when('/login', {
    templateUrl: '/templates/auth/login.html',
    controller: 'loginController',
    controllerAs: 'auth'
  }).when('/register', {
    templateUrl: '/templates/auth/register.html',
    controller: 'registerController',
    controllerAs: 'auth'
  })
    .when('/about', {
      templateUrl: '/templates/content/bio.html',
      controller: 'bioController',
      controllerAs: 'bio'
    })
    .when('/reel', {
      templateUrl: '/templates/content/reel.html',
      controller: 'navController',
      controllerAs: 'reelController'
    })
    .when('/resume', {
      templateUrl: '/templates/content/resume.html',
      controller: 'resumeController',
      controllerAs: 'resume'
    })
    .when('/awards', {
      templateUrl: '/templates/content/awards.html',
      controller: 'navController',
      controllerAs: 'awardsController'
    })
    .when('/schema', {
      templateUrl: '/templates/admin/schema.html',
      controller: 'schemaController',
      controllerAs: 'schema'
    })
    .when('/actors', {
      templateUrl: '/templates/content/actors.html',
      controller: 'navController',
      controllerAs: 'actorsController'
    });

  $locationProvider.html5Mode(false);
});
