'use strict';
const angular = require('angular');

/*@ngInject*/
export function postService($http) {
	var self = this;
  self.$http = $http;

	self.one = function(id) {
		return self.$http.get('/api/posts/' + id);
	}//End one

  self.get = function() {
    return self.$http.get('/api/posts');
  }//End get

	self.getRecent = function(n) {
		return self.$http.get('/api/posts/recent/' + n);
	}//End getRecent

	self.getByType = function(type) {
		return self.$http.get('/api/posts/indexByType/' + type)
	}//End getProjects

  self.save = function(post) {
		post.created = Date.now();
    return self.$http.post('/api/posts', post);
  }//End save

  self.update = function(post) {
    return self.$http.put('/api/posts/' + post._id, post);
  }//End update

  self.remove = function(id) {
    return self.$http.delete('/api/posts/' + id);
  }//End delete
}//End service

export default angular.module('portfolioApp.post', [])
  .service('post', postService)
  .name;
