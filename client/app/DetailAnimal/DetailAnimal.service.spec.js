'use strict';

describe('Service: DetailAnimal', function () {

  // load the service's module
  beforeEach(module('helpetApp.DetailAnimal'));

  // instantiate service
  var DetailAnimal;
  beforeEach(inject(function (_DetailAnimal_) {
    DetailAnimal = _DetailAnimal_;
  }));

  it('should do something', function () {
    expect(!!DetailAnimal).to.be.true;
  });

});
