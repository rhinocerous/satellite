(function() {
  'use strict';

  var svcObject = function ($baseHttpService, $q, $window)
  {
    var svc = this;

    $.extend( svc, $baseHttpService);

    svc.name = "auth";

    svc.getCurrent = _getCurrent;
    svc.login = _login;
    svc.register = _register;
    svc.logout = _logout;

    svc.user = null;

    _getCurrent();

    function _getCurrent()
    {
      if(null == svc.user)
      {
        var q = _loadCurrent();

        q.then(function(response){

          svc.user = response.data.user;

          return svc.user;

        }, function(error){

          return false;
        });
      }
      else
      {
        return svc.user;
      }
    }

    function _loadCurrent()
    {
      var deferred = $q.defer();

      svc.$http({

        method: "GET",
        url: "/api/auth/current"

      }).then(function(result) {

        deferred.resolve(result);
      }, function(error) {
        deferred.reject(error);
      });

      return deferred.promise;
    }

    function _logout() {
      var deferred = $q.defer();

      svc.$http({
        method: "POST",
        url: "/api/auth/logout"

      }).then(function(result) {

        $window.sessionStorage["userInfo"] = null;
        svc.user = null;
        deferred.resolve(result);

      }, function(error) {
        deferred.reject(error);
      });

      return deferred.promise;
    }

    function _register(userName, email, password) {

      var deferred = $q.defer();

      svc.$http.post("/api/auth/local/register", {
        username: userName,
        email:email,
        password: password
      }).then(function(result) {

        deferred.resolve(result.data);

      }, function(error) {
        deferred.reject(error);
      });

      return deferred.promise;
    }

    function _login(userName, password) {

      var deferred = $q.defer();

      svc.$http.post("/api/auth/local", {
        identifier: userName,
        password: password
      }).then(function(result) {
        deferred.resolve(result.data);
      }, function(error) {
        deferred.reject(error);
      });

      return deferred.promise;
    }


    return svc;
  };

  angular.module(SATELLITE)
    .service('$authService'
    , ["$baseHttpService", "$q", "$window", svcObject]
  );

})();
