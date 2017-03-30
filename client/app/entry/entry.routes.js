'use strict';

export default function($stateProvider) {
  'ngInject';
  $stateProvider
    .state('entry', {
      url: '/entry/:id',
      template: '<entry></entry>'
    });
}
