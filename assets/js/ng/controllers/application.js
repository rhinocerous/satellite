satellite.ng.page.appControllerFactory = function (
  $scope
  , $baseController
  , $route
  , $routeParams) {

  var vm = this;

  $.extend(vm, $baseController);

  vm.$scope = $scope;
  vm.$route = $route;
  vm.$routeParams = $routeParams;

  vm.currentRequestLabel = "Current Request:";
  vm.sidebarActive = false;

  vm.tabs = [
    { link: '#/', label: 'Settings', icon: 'fa-cogs' },
    { link: '#/about', label: 'Biography', icon: 'fa-edit' },
    { link: '#/reel', label: 'Reel', icon: 'fa-film' },
    { link: '#/resume', label: 'Resume', icon: 'fa-book' },
    { link: '#/awards', label: 'Awards', icon: 'fa-fire' },
    { link: '#/actors', label: 'Actors', icon: 'fa-bullseye' },
    { link: '#/schema', label: 'Schema', icon: 'fa-wrench' }

  ];

  vm.selectedTab = vm.tabs[0];

  vm.tabClass = _tabClass;
  vm.setSelectedTab = _setSelectedTab;
  vm.toggleSidebar = _toggleSidebar;
  vm.showSidebar = _showSidebar;
  vm.hideSidebar = _hideSidebar;

  render();

  function render()
  {
    vm.setUpCurrentRequest(vm);

    switch (vm.currentRequest.originalPath) {
      case "/":
        vm.title = "Main Controller";
        vm.message = "hello! welcome to the routes demo. I am the main controller and this is the main page.";
        break;
    }
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
};

satellite.ng.addController(satellite.ng.app.module
  , "appController"
  , ['$scope', '$baseController', '$route', '$routeParams']
  , satellite.ng.page.appControllerFactory);
