//Admin State
app.config(['$stateProvider', function($stateProvider){

  $stateProvider
    .state('admin', {
      url: '/admin',
      resolve: {
        redirect: function($location, localStorageService){
          var isAdmin = localStorageService.get('isAdmin');
          if(!isAdmin){
            $location.path('/login');
          }
        }
      },
      views: {
        'sidebar': {
          templateUrl: '/js/admin/templates/sidebar.tpl.html',
          controller: 'AdminSidebarCtrl'
        },
        'main': {
          templateUrl: '/js/admin/templates/admin.tpl.html',
          controller: 'AdminCtrl'
        }
      }
    });

}]);