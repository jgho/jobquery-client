app.config(['$stateProvider', function($stateProvider){

  $stateProvider
    .state('admin.opportunities', {
      url: '/opportunities',
      templateUrl: '/js/admin/opportunities/core/templates/opportunities.tpl.html',
      controller: 'AdminOpportunitiesCtrl'
    });

}]);