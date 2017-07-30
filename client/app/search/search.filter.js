'use strict';
import angular from 'angular';

/*@ngInject*/
export function searchFilter() {
  return (arr, str) => {
    if (!str) return arr;
    let result = [];

    angular.forEach(arr, (o) => {
      if (o.title.toLowerCase().indexOf(str.toLowerCase()) !== -1)
        result.push(o);
    });
    console.log(result)

    return result;
  }
}

export default angular.module('portfolioApp.search', [])
  .filter('search', searchFilter)
  .name;
