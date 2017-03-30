'use strict';
const angular = require('angular');
const uiRouter = require('angular-ui-router');
import routes from './entry.routes';

export class EntryComponent {
  
  /*@ngInject*/
  constructor($state, post, wysiwyg) {
    this.$state = $state;
    this.post = post;
    this.wysiwyg = wysiwyg;
    this.entry = {};
  }

  $onInit() {
    if (this.$state.params.id != undefined) {
      this.post.one(this.$state.params.id).then(res => {
        this.entry = res.data, this.dataLoaded = true;
      }, err => {
        console.log(err);
        this.$state.go('main');
      });
    } else {
      this.$state.go('main');
    }
  }

  //Construct quill editor
  constructBody(post) {
    var element = document.getElementById('displayEditor');
    var display = this.wysiwyg.initDisplay(element);
    display.setContents(this.entry.body);
  }
}

//Strict injection
EntryComponent.$inject = ["$state", 'post', 'wysiwyg'];
export default angular.module('portfolioApp.entry', [uiRouter])
  .config(routes)
  .component('entry', {
    template: require('./entry.html'),
    controller: EntryComponent,
    controllerAs: 'EntryCtrl'
  })
  .name;
