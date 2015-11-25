(function() {
  'use strict';

  var svcObject = function ($baseService, $rootScope)
  {
    var svc = this;

    $.extend( svc, $baseService);

    svc.$rootScope = $rootScope;

    svc.listen = _listen;
    svc.broadcast = _broadcast;

    function _listen(event, callback)
    {
      svc.$rootScope.$on(event, callback);
    }

    function _broadcast()
    {
      svc.$rootScope.$broadcast(arguments[0], arguments);
    }

    return svc;
  };

  angular.module(SATELLITE)
    .service('$systemEventService'
    , ["$baseService","$rootScope", svcObject]
  );

})();
