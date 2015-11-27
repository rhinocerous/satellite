(function() {
  'use strict';

//  abstract away the logic of doing alerts to user.
//  this implementation uses toastr:
var svcObject = function ($baseService, toastr)
{
  var svc = this;

  $.extend( svc, $baseService);

  svc.toastr = toastr;

  svc.success = _success;
  svc.info = _info;
  svc.error = _error;
  svc.warning = _warning;

  _init();

  function _init()
  {
    svc.toastr.options = {
      "closeButton": true,
      "debug": false,
      "newestOnTop": true,
      "progressBar": false,
      "positionClass": "toast-top-center",
      "preventDuplicates": true,
      "onclick": null,
      "showDuration": "300",
      "hideDuration": "1000",
      "timeOut": "5000",
      "extendedTimeOut": "1000",
      "showEasing": "swing",
      "hideEasing": "linear",
      "showMethod": "fadeIn",
      "hideMethod": "fadeOut"
    }
  }

  function _success(msg, title)
  {
    if(!title)
      title = "Success";

    svc.toastr.success(msg, title, {
      closeButton: true
    });
  }

  function _info(msg, title)
  {
    if(!title)
      title = "Info";

    svc.toastr.info(msg, title, {
      closeButton: true
    });
  }

  function _error(msg, title)
  {
    if(!title)
      title = "Error";

    svc.toastr.error(msg, title, {
      closeButton: true
    });
  }

  function _warning(msg, title)
  {
    if(!title)
      title = "Warning";

    svc.toastr.warning(msg, title, {
      closeButton: true
    });
  }

  return svc;
};

  angular.module(SATELLITE)
    .service('$alertService'
    , ["$baseService", "toastr", svcObject]
  );

}());
