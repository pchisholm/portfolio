'use strict';

describe('Component: EntryComponent', function() {
  // load the controller's module
  beforeEach(module('portfolioApp.entry'));

  var EntryComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($componentController) {
    EntryComponent = $componentController('entry', {});
  }));

  it('should ...', function() {
    expect(1).to.equal(1);
  });
});
