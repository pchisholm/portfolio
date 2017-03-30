'use strict';
/* eslint no-sync: 0 */

import angular from 'angular';

export class NavbarComponent {
  menu = [{
    title: 'Home',
    state: 'main'
  }];
  isCollapsed = true;

  constructor(Auth, $state, $window, $mdSidenav, $mdPanel, post) {
    'ngInject';
    this.isAdmin = Auth.isAdminSync;
    this.$state = $state;
    this.$window = $window;
    this.$mdSidenav = $mdSidenav;
    this.$mdPanel = $mdPanel;
    this.post = post;
    this.recentPosts = [];
    this.myDate = new Date();
    this.showMobileMenu = false;
    console.log($window.innerHeight);
  }//End constructor

  $onInit() {
    let limit = 2;
    if (this.$window.innerHeight > 700) limit = 5; 

    this.post.getRecent(limit).then(res => {
      this.recentPosts = res.data;
    }, err => {
      console.log(err);
      this.initError = true;
    });
  }//End onInit

  //Toggle sidenav
  openLeftMenu() {
    this.$mdSidenav('left').toggle();
  };//End openLeftMenu
}//End class

export default angular.module('directives.navbar', ['ngMaterial'])
.component('navbar', {
  template: require('./navbar.html'),
  controller: NavbarComponent,
  controllerAs: 'NavCtrl'
})
.name;
