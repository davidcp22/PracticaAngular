'use strict';

describe('Component: DetailAnimalComponent', function () {

  // load the controller's module
  beforeEach(module('helpetApp'));

  var DetailAnimalComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    DetailAnimalComponent = $componentController('DetailAnimalComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
