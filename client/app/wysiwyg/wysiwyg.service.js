'use strict';
const angular = require('angular');

/*@ngInject*/
export function wysiwygService() {
	var self = this;

	//Editor toolbar options
  self.toolbarOptions = [
    ['bold', 'italic', 'underline', 'strike'],
    ['blockquote', 'code-block'],
    [{ 'header': 1 }, { 'header': 2 }],
    [{ 'list': 'ordered'}, { 'list': 'bullet' }],
    [{ 'script': 'sub'}, { 'script': 'super' }],
    [{ 'indent': '-1'}, { 'indent': '+1' }],
    [{ 'direction': 'rtl' }],
    [{ 'size': ['small', false, 'large', 'huge'] }],
    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
    [{ 'color': [] }, { 'background': [] }],
    [{ 'font': [] }],
    [{ 'align': [] }],
    ['clean']
  ];

	//Editor config
  self.editorOptions = {
    debug: 'info',
    modules: {
      toolbar: this.toolbarOptions
    },
    placeholder: "~*~*~ Post Content ~*~*~",
    readOnly: false,
    theme: 'snow'
  };

	//Read only display config
	this.displayOptions = {
		debug: false,
		readOnly: true
	};

	//Init editor quill module
  self.initEditor = function(container) {
    return new Quill(container, self.editorOptions);
  }

	//Init read only display quill module
	self.initDisplay = function(container) {
		return new Quill(container, self.displayOptions);
	}
}

export default angular.module('portfolioApp.wysiwyg', [])
  .service('wysiwyg', wysiwygService)
  .name;
