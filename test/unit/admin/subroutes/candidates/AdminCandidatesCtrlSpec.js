describe('AdminCandidatesCtrl', function(){

  beforeEach(module('jobQuery'));

  beforeEach(inject(function($injector){

    var $rootScope = $injector.get('$rootScope');
    var $controller = $injector.get('$controller');
    var User = $injector.get('User');


    createController = function(){
      return $controller('AdminCandidatesCtrl', {
          Resource    : User,
          $controller : $controller,
          $scope      : $rootScope.$new()
        });
    };

  }));

  it('should exist', function(){
    var controller = createController();
    expect(typeof controller).toBe('object');
  });

});
