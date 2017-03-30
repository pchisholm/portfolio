'use strict';
const angular = require('angular');

/*@ngInject*/
export function linkService($http) {
	var self = this;
  self.$http = $http;

  self.get = function() {
    return self.$http.get('/api/links');
  }//End get

	self.getRecent = function() {
		return self.$http.get('/api/links/recent/lol');
	}//End getRecent

  self.save = function(link) {
    self.$http.post('/api/links', link);
  }//End save

  self.update = function(link) {
    self.$http.put('/api/links/' + link._id, link);
  }//End update

  self.remove = function(id) {
    self.$http.delete('/api/links/' + id);
  }//End delete
}

export default angular.module('portfolioApp.link', [])
  .service('link', linkService)
  .name;
