'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './about.routes';

export class AboutComponent {

  /*@ngInject*/
  constructor($http, $state, link) {
    this.$http = $http, this.link = link, this.$state = $state;
    this.links = [];
  }

  $onInit() {
    console.log(this.$state)
    if (this.$state.params.idx != undefined) {
      this.link.get().then(res => {
        this.links = res.data,
        this.selectedIndex = this.$state.params.idx,
        this.dataLoaded = true;
      }, err => {
        console.log(err), this.initError = true;
      });
    } else {
      this.$state.go('main');
    }
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
