'use strict';

describe('Service: homeService', function () {

  // load the service's module
  beforeEach(module('helpetApp.homeService'));

  // instantiate service
  var homeService;
  beforeEach(inject(function (_homeService_) {
    homeService = _homeService_;
  }));

  it('should do something', function () {
    expect(!!homeService).to.be.true;
  });

});
