'use strict';

describe('Directive: compileSvg', function() {
  // load the directive's module
  beforeEach(module('portfolioApp.compile_svg'));

  var element,
    scope;

  beforeEach(inject(function($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function($compile) {
    element = angular.element('<compile-svg></compile-svg>');
    element = $compile(element)(scope);
    expect(element.text()).to.equal('this is the compileSvg directive');
  }));
});
