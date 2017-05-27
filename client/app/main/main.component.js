import angular from 'angular';
import uiRouter from 'angular-ui-router';
import routing from './main.routes';

export class MainController {

  /*@ngInject*/
  constructor($state, $cookies, $interval, wysiwyg, pagerService, post, link) {
    this.$state = $state;
    this.$cookies = $cookies;
    this.post = post;
    this.link = link;
    this.wysiwyg = wysiwyg;
    this.pagerService = pagerService;
    this.pager = {};
    this.quickParams = [];
    this.showQuickFeed = false;
  }

  $onInit() {
    this.link.getRecent().then(res => {
      this.links = res.data;
      this.post.get().then(res => {
        this.posts = res.data.slice().reverse();
        this.quickParams = res.data.map((p) => {
          var paramObj = {};
          paramObj['_id'] = p._id;
          paramObj['title'] = p.title
          return paramObj;
        }).reverse();
        console.log(this.quickParams)
        this.setPage(1), this.dataLoaded = true;
      }, err => {
        console.log(err);
        this.initError = true;
      });
    }, err => {
      console.log(err);
      this.initError = true;
    });
  }

  //Construct quill editor (read only)
  constructBody(index, post) {
    var element = document.getElementById('display' + index);
    var display = this.wysiwyg.initDisplay(element);
    display.setContents(post.body);
  }

  //Set current 5 posts by page
  setPage(page) {
    if (page < 1 || page > this.pager.totalPages) return;
    this.pager = this.pagerService.GetPager(this.posts.length, page);
    this.items = this.posts.slice(this.pager.startIndex, this.pager.endIndex + 1);
  }
}

export default angular.module('portfolioApp.main', [uiRouter])
  .config(routing)
  .component('main', {
    template: require('./main.html'),
    controller: MainController,
    controllerAs: 'MainCtrl'
  })
  .name;
