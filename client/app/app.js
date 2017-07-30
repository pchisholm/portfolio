'use strict';

import angular from 'angular';
// import ngAnimate from 'angular-animate';
import ngCookies from 'angular-cookies';
import ngResource from 'angular-resource';
import ngSanitize from 'angular-sanitize';
import 'angular-socket-io';

import uiRouter from 'angular-ui-router';
import uiBootstrap from 'angular-ui-bootstrap';
import ngAnimate from 'angular-animate';
import ngAria from 'angular-aria';
import ngMaterial from 'angular-material';
import * as THREE from 'three';
// import ngMessages from 'angular-messages';
// import ngValidationMatch from 'angular-validation-match';

import {
  routeConfig
} from './app.config';

import _Auth from '../components/auth/auth.module';
import account from './account';
import admin from './admin';
import navbar from '../components/navbar/navbar.component';
import footer from '../components/footer/footer.component';
import compile_svg from './compile_svg/compile_svg.directive.js';
import main from './main/main.component';
import about from './about/about.component';
import projects from './projects/projects.component';
import entry from './entry/entry.component';
import post from './post/post.service';
import link from './link/link.service';
import wysiwyg from './wysiwyg/wysiwyg.service';
import pagerService from './pager/pager.service';
import constants from './app.constants';
import util from '../components/util/util.module';
import socket from '../components/socket/socket.service';
import smartTable from 'angular-smart-table';
import searchFilter from './search/search.filter'
// import textAngular from 'textangular';

import './app.scss';

angular.module('portfolioApp', [ngCookies, ngResource, ngSanitize, 'btford.socket-io', uiRouter,
  uiBootstrap, ngAnimate, ngAria, ngMaterial, _Auth, account, admin, navbar, footer, compile_svg, about, main, projects, constants,
  socket, smartTable, searchFilter, entry, post, link, wysiwyg, pagerService, util
])
  .config(routeConfig)
  .run(function($rootScope, $location, Auth) {
    'ngInject';
    // Redirect to login if route requires auth and you're not logged in

    $rootScope.$on('$stateChangeStart', function(event, next) {
      Auth.isLoggedIn(function(loggedIn) {
        if(next.authenticate && !loggedIn) {
          $location.path('/login');
        }
      });
    });
  });

angular.element(document)
  .ready(() => {
    angular.bootstrap(document, ['portfolioApp'], {
      strictDi: true
    });
  });
