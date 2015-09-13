/**=========================================================
 * Module: SidebarDirective
 * Wraps the sidebar. Handles collapsed state and slide
 *
 * pulled from Naut admin template
 * products-WB0LX03F7/angularjs/src/js/modules/layout/ui-sidebar.directive.js
 =========================================================*/

(function() {
  'use strict';

  satellite.ng.app.module
    .directive('uiSidebar', uiSidebar);

  uiSidebar.$inject = ['$rootScope', '$window', '$timeout', 'MEDIA_QUERY'];
  function uiSidebar ($rootScope, $window, $timeout, MEDIA_QUERY) {

    return {
      restrict : 'A',
      link : link
    };

    function link(scope, element) {
      element.find('a').on('click', function (event) {
        var ele = angular.element(this),
          par = ele.parent()[0];

        // remove active class (ul > li > a)
        var lis = ele.parent().parent().children();
        angular.forEach(lis, function(li){
          if(li !== par)
            angular.element(li).removeClass('active');
        });

        var next = ele.next();
        if ( next.length && next[0].tagName === 'UL' ) {
          ele.parent().toggleClass('active');
          event.preventDefault();
        }
      });


      //  TODO: move this logic into controller, directive here is lame
      // on mobiles, sidebar starts off-screen
      if ( onMobile() ) $timeout(function(){
        console.log("on mobile true for page startup");

        satellite.ng.app.sidebar.isOffscreen = true;
      });
      // hide sidebar on route change
      $rootScope.$on('$stateChangeStart', function() {
        if ( onMobile() )
        {
          console.log("on mobile true on route change");
          satellite.ng.app.sidebar.isOffscreen = true;
        }

      });

      $window.addEventListener('resize', function(){
        if ( onMobile() ) {

          console.log("on mobile true on resize");

          $timeout(function(){
            satellite.ng.app.sidebar.isOffscreen = true;
          });
        }
      });

      function onMobile() {
        return $window.innerWidth < MEDIA_QUERY.tablet;
      }

    }
  }
})();
