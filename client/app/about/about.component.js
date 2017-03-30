'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './about.routes';

export class AboutComponent {

  /*@ngInject*/
  constructor($http, link) {
    this.$http = $http, this.link = link;
    this.links = [];
  }

  $onInit() {
    this.link.get().then(res => {
      this.links = res.data, this.dataLoaded = true;
    }, err => {
      console.log(err), this.initError = true;
    });
  }
}

export default angular.module('portfolioApp.about', [uiRouter])
  .config(routes)
  .component('about', {
    template: require('./about.html'),
    controller: AboutComponent,
    controllerAs: 'AboutCtrl'
  })
  .name;
