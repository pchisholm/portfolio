'use strict';
const angular = require('angular');

export default angular.module('portfolioApp.compile_svg', [])
  .directive('d', function($compile) {
    return {
      scope: {
        d: '='
      },
      link: function (scope, element, attrs) {
            var newpath = document.createElementNS('http://www.w3.org/2000/svg',"path");
            newpath.setAttributeNS(null, "d", scope.d[0]), newpath.style.fill = scope.d[1];
            element[0].appendChild(newpath);
      }
    };
  })
  .name;
