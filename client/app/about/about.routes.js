'use strict';

export default function($stateProvider) {
  'ngInject';
  $stateProvider
    .state('about', {
      url: '/about/:idx',
      template: '<about></about>'
    });
}
