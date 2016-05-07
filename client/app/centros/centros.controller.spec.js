'use strict';

describe('Component: CentrosComponent', function () {

  // load the controller's module
  beforeEach(module('y'));

  var CentrosComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    CentrosComponent = $componentController('CentrosComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
