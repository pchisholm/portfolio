'use strict';

export default class AdminController {

  /*@ngInject*/
  constructor($http, $timeout, wysiwyg, post, link) {
    this.$http = $http;
    this.$timeout = $timeout;
    this.wysiwyg = wysiwyg;
    this.post = post;
    this.link = link;
    this.postCollection = [];
    this.linkCollection = [];
    this.postSelection = {};
    this.linkSelection = {};
    this.postEditMode = false;
    this.linkEditMode = false;
  }

  $onInit() {
    this.post.get().then(res => {
      this.postCollection = res.data;
      this.link.get().then(res => {
        this.linkCollection = res.data;
        this.dataLoaded = true;
      }, err => {
        console.log(err);
        this.initError = true;
      });
    }, err => {
      console.log(err);
      this.initError = true;
    });

    let self = this;

    this.$timeout(function() {
      self.container = document.getElementById('editor');
      self.editor = self.wysiwyg.initEditor(self.container);
    });
  }

  //Point to post obj from post arr on select
  selectPost(post) {
    this.postSubmitted = false;
    this.postEditMode = true;
    this.postSelection = post;
    this.editor.setContents(post.body);
    form.$setPristine();
  }

  //Cancel post selections
  unselectPost(form) {
    this.postEditMode = false;
    this.postSubmitted = false;
    this.postSelection = {};
    this.editor.setContents();
    form.$setPristine();
  }

  //Hide err dom node
  closePostError() {
    this.showPostError = false;
  }

  //Post 'post' obj to api, save to store
  savePost(form, post) {
    this.postSubmitted = true;

    if(form.$valid) {
      let self = this;
      post.body = this.editor.getContents();
      this.postSubmitted = false;

      if (!this.postEditMode) {
        this.post.save(post).then(res => {
          self.postCollection.push(res.data);
          self.postSelection = res.data;
          self.postEditMode = true;
        }, err => {
          console.log(err);
          self.showPostError = true;
          self.postError = 'Error: ' + err.data + ' (' + err.status + ')';
        });
      } else {
        this.post.update(post).then(res => {
          post = angular.copy(res.data);
        }, err => {
          console.log(err);
          self.showPostError = true;
          self.postError = 'Error: ' + err.data + ' (' + err.status + ')';
        });
      }
    }
  }

  //Delete post in store, splice from post arr on success
  deletePost(post) {
    this.post.remove(post._id)
    .then(res => {
      this.postCollection.splice(this.postCollection.indexOf(post), 1);
    }, err => {
      console.log(err);
      this.showPostError = true;
      this.postError = 'Error: ' + err.data + ' (' + err.status + ')';
    });
  }

  //Point to link obj from link arr on select
  selectLink(form, link) {
    this.linkSubmitted = false;
    this.linkEditMode = true;
    this.linkSelection = link;
    form.$setPristine();
  }

  //Cancel post selections
  unselectLink(form) {
    this.linkEditMode = false;
    this.linkSubmitted = false;
    this.linkSelection = null;
    form.$setPristine();
  }

  //Post link obj to api, save to store
  saveLink(form, link) {
    this.linkSubmitted = true;

    if(form.$valid) {
      if (!this.linkEditMode) {
        this.link.save(link)
        .then(res => {
          this.linkSubmitted = false;
          form.$setPristine();
        }, err => {
          console.log(err);
          this.showLinkError = true;
        });
      } else {
        this.link.update(link)
        .then(res => {
          this.linkSubmitted = false;
          form.$setPristine();
        }, err => {
          console.log(err);
          this.showLinkError = true;
        });
      }
    }
  }

  //TO DO: add link deletion
  deleteLink(link) {

  }//End delete
}//End component
