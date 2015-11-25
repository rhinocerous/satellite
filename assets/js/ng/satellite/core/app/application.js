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
    vm.website = null;

    vm.tabs = [];

    vm.tabsWebsite = [
      { segment: '', label: 'Dashboard', icon: 'fa-bar-chart' },
      { segment: 'values', label: 'Values', icon: 'fa-book' },
      { segment: 'schema', label: 'Schema', icon: 'fa-wrench' }
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

      vm.$systemEventService.listen(vm.EVENT_TYPES.WEBSITE_LOADED, _onWebsiteLoaded);
    }

    function _onWebsiteLoaded(event, data)
    {
      console.log("website loaded", data[1]);

      vm.website = data[1];

      vm.tabs = [];

      angular.forEach(vm.tabsWebsite, function(val, key){

        val.link = "#/websites/" + vm.website.slug + "/" + val.segment;

        vm.tabs.push(val);

      });

      _showSidebar();
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

