'use strict';

describe('Service: centros', function () {

  // load the service's module
  beforeEach(module('y'));

  // instantiate service
  var centros;
  beforeEach(inject(function (_centros_) {
    centros = _centros_;
  }));

  it('should do something', function () {
    expect(!!centros).to.be.true;
  });

});
