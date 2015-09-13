satellite.ng.app.services.authServiceFactory = function ($baseHttpService, $q, $window)
{
  var svc = this;

  $.extend( svc, $baseHttpService);

  svc.name = "auth";

  svc.getCurrent = _getCurrent;
  svc.login = _login;

  svc.user = null;

  function _getCurrent(data, onSuccess, onError)
  {
    return svc.user;
  }

  function _login(userName, password) {

    var deferred = $q.defer();

    svc.$http.post("/api/login", {
      identifier: userName,
      password: password
    }).then(function(result) {

      console.log("response from server", result);

      svc.user = {
        accessToken: result.data.access_token,
        userName: result.data.userName
      };

      $window.sessionStorage["userInfo"] = JSON.stringify(svc.user);

      deferred.resolve(svc.user);

    }, function(error) {
      deferred.reject(error);
    });

    return deferred.promise;
  }

};

satellite.ng.addService(satellite.ng.app.module
  , "$authService"
  , ["$baseHttpService", "$q", "$window"]
  , satellite.ng.app.services.authServiceFactory);
