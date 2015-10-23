(function() {
  'use strict';


  var module = angular.module(SATELLITE);

  module.config(["$routeProvider", "$locationProvider", function ($routeProvider, $locationProvider) {

    var authAction = ["$q", "$authService", function ($q, $authService) {

      $authService.getCurrent(function(err, userInfo)
      {
        if(err)
        {
          console.error("error in auth check", err);

          return $q.reject({authenticated: false});
        }

        if (userInfo && userInfo !== {}) {
          console.log("user is logged in", userInfo);
          return $q.when(userInfo);
        } else {
          return $q.reject({authenticated: false});
        }

      });
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
      .when('/websites', {
        templateUrl: '/templates/admin/websites.html',
        controller: 'websitesController',
        controllerAs: 'sites',
        resolve: {
          auth: authAction
        }
      })
      .when('/websites/:websiteSlug', {
        templateUrl: '/templates/admin/website/dashboard.html',
        controller: 'websiteDashController',
        controllerAs: 'dash',
        resolve: {
          auth: authAction
        }
      })
      .when('/websites/:websiteSlug/schema', {
        templateUrl: '/templates/admin/website/schema.html',
        controller: 'websiteSchemaController',
        controllerAs: 'schema',
        resolve: {
          auth: authAction
        }
      })
      .when('/websites/:websiteSlug/values', {
        templateUrl: '/templates/admin/website/values.html',
        controller: 'websiteValuesController',
        controllerAs: 'values',
        resolve: {
          auth: authAction
        }
      })
      .when('/websites/:websiteSlug/template', {
        templateUrl: '/templates/admin/website/template.html',
        controller: 'websiteTemplateController',
        controllerAs: 'template',
        resolve: {
          auth: authAction
        }
      });
      //.when('/about', {
      //  templateUrl: '/templates/content/bio.html',
      //  controller: 'bioController',
      //  controllerAs: 'bio',
      //  resolve: {
      //    auth: authAction
      //  }
      //})
      //.when('/reel', {
      //  templateUrl: '/templates/content/reel.html',
      //  controller: 'appController',
      //  controllerAs: 'reelController',
      //  resolve: {
      //    auth: authAction
      //  }
      //})
      //.when('/resume', {
      //  templateUrl: '/templates/content/resume.html',
      //  controller: 'resumeController',
      //  controllerAs: 'resume',
      //  resolve: {
      //    auth: authAction
      //  }
      //})
      //.when('/awards', {
      //  templateUrl: '/templates/content/awards.html',
      //  controller: 'appController',
      //  controllerAs: 'awardsController',
      //  resolve: {
      //    auth: authAction
      //  }
      //})
      //.when('/schema', {
      //  templateUrl: '/templates/admin/schema.html',
      //  controller: 'schemaController',
      //  controllerAs: 'schema',
      //  resolve: {
      //    auth: authAction
      //  }
      //})
      //.when('/actors', {
      //  templateUrl: '/templates/content/actors.html',
      //  controller: 'appController',
      //  controllerAs: 'actorsController',
      //  resolve: {
      //    auth: authAction
      //  }
      //});

    $locationProvider.html5Mode(false);
  }]);


  module.run(["$rootScope", "$location", function ($rootScope, $location) {

    //$rootScope.$on("$routeChangeSuccess", function (event, data, userInfo) {
    //  console.log("on route success", userInfo);
    //});

    $rootScope.$on("$routeChangeError", function (event, current, previous, eventObj) {

      console.log("route change error", eventObj);

      if (eventObj.authenticated === false) {
        $location.path("/login");
      }
    });

  }]);


})();
