'use strict';

describe('Service: wysiwyg', function() {
  // load the service's module
  beforeEach(module('portfolioApp.wysiwyg'));

  // instantiate service
  var wysiwyg;
  beforeEach(inject(function(_wysiwyg_) {
    wysiwyg = _wysiwyg_;
  }));

  it('should do something', function() {
    expect(!!wysiwyg).to.be.true;
  });
});
