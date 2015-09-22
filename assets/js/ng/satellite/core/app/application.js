(function() {
  'use strict';

  var vmObject = function (
    $scope
    , $baseController
    , $route
    , $routeParams
    , MEDIA_QUERY
    , $rootScope
    , $window
    , $timeout) {

    var vm = this;

    $.extend(vm, $baseController);

    vm.$scope = $scope;
    vm.$route = $route;
    vm.$routeParams = $routeParams;
    vm.MEDIA_QUERY = MEDIA_QUERY;
    vm.$rootScope = $rootScope;
    vm.$window = $window;
    vm.$timeout = $timeout;

    vm.currentRequestLabel = "Current Request:";
    vm.sidebarActive = false;

    vm.tabs = [
      //{ link: '#/', label: 'Settings', icon: 'fa-cogs' },
      //{ link: '#/about', label: 'Biography', icon: 'fa-edit' },
      //{ link: '#/reel', label: 'Reel', icon: 'fa-film' },
      //{ link: '#/resume', label: 'Resume', icon: 'fa-book' },
      //{ link: '#/awards', label: 'Awards', icon: 'fa-fire' },
      //{ link: '#/actors', label: 'Actors', icon: 'fa-bullseye' },
      //{ link: '#/schema', label: 'Schema', icon: 'fa-wrench' }

    ];

    vm.selectedTab = vm.tabs[0];

    vm.tabClass = _tabClass;
    vm.setSelectedTab = _setSelectedTab;
    vm.toggleSidebar = _toggleSidebar;
    vm.showSidebar = _showSidebar;
    vm.hideSidebar = _hideSidebar;

    _init();

    function _init()
    {
      if ( _onMobile() ){
        vm.$timeout(function(){
          console.log("on mobile true for page startup");
          _hideSidebar();
        });
      }
      // hide sidebar on route change
      vm.$rootScope.$on('$stateChangeStart', function() {
        if ( _onMobile() )
        {
          console.log("on mobile true on route change");
          _hideSidebar();
        }
      });

      vm.$window.addEventListener('resize', function(){
        if ( _onMobile() ) {

          console.log("on mobile true on resize");

          vm.$timeout(function(){
            _hideSidebar();
          });
        }
      });
    }

    function _toggleSidebar()
    {
      vm.sidebarActive = !vm.sidebarActive;
    }

    function _showSidebar()
    {
      vm.sidebarActive = true;
    }

    function _hideSidebar()
    {
      vm.sidebarActive = false;
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

    function _onMobile() {
      return vm.$window.innerWidth < MEDIA_QUERY.tablet;
    }
  };

  angular.module(SATELLITE)
    .controller('appController',
    ['$scope', '$baseController', '$route', '$routeParams','MEDIA_QUERY','$rootScope', '$window', '$timeout', vmObject]);

})();

