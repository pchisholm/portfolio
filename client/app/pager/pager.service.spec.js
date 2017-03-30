'use strict';

describe('Service: pager', function() {
  // load the service's module
  beforeEach(module('portfolioApp.pager'));

  // instantiate service
  var pager;
  beforeEach(inject(function(_pager_) {
    pager = _pager_;
  }));

  it('should do something', function() {
    expect(!!pager).to.be.true;
  });
});
