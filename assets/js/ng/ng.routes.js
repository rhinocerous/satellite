satellite.ng.app.module.config(function ($routeProvider, $locationProvider) {

  var authAction = ["$q", "$authService", function ($q, $authService) {

    var userInfo = $authService.getCurrent();

    if (userInfo && userInfo !== {}) {
      console.log("user is logged in", userInfo);
      return $q.when(userInfo);
    } else {
      return $q.reject({authenticated: false});
    }
  }];

  $routeProvider.when('/', {
    templateUrl: '/templates/admin/settings.html',
    controller: 'settingsController',
    controllerAs: 'settings',
    resolve: {
      auth: authAction
    }
  })
    .when('/login', {
      templateUrl: '/templates/auth/login.html',
      controller: 'loginController',
      controllerAs: 'auth'
    })
    .when('/register', {
      templateUrl: '/templates/auth/register.html',
      controller: 'registerController',
      controllerAs: 'auth'
    })
    .when('/about', {
      templateUrl: '/templates/content/bio.html',
      controller: 'bioController',
      controllerAs: 'bio',
      resolve: {
        auth: authAction
      }
    })
    .when('/reel', {
      templateUrl: '/templates/content/reel.html',
      controller: 'navController',
      controllerAs: 'reelController',
      resolve: {
        auth: authAction
      }
    })
    .when('/resume', {
      templateUrl: '/templates/content/resume.html',
      controller: 'resumeController',
      controllerAs: 'resume',
      resolve: {
        auth: authAction
      }
    })
    .when('/awards', {
      templateUrl: '/templates/content/awards.html',
      controller: 'navController',
      controllerAs: 'awardsController',
      resolve: {
        auth: authAction
      }
    })
    .when('/schema', {
      templateUrl: '/templates/admin/schema.html',
      controller: 'schemaController',
      controllerAs: 'schema',
      resolve: {
        auth: authAction
      }
    })
    .when('/actors', {
      templateUrl: '/templates/content/actors.html',
      controller: 'navController',
      controllerAs: 'actorsController',
      resolve: {
        auth: authAction
      }
    });

  $locationProvider.html5Mode(false);
});


satellite.ng.app.module.run(["$rootScope", "$location", function ($rootScope, $location) {

  $rootScope.$on("$routeChangeSuccess", function (event, data, userInfo) {
    console.log("on route success", userInfo);
  });

  $rootScope.$on("$routeChangeError", function (event, current, previous, eventObj) {
    if (eventObj.authenticated === false) {
      $location.path("/login");
    }
  });

}]);
