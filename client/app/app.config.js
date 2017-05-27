'use strict';

export function routeConfig($urlRouterProvider, $locationProvider, $mdThemingProvider) {
  'ngInject';

  $urlRouterProvider.otherwise('/');

  $locationProvider.html5Mode(true);
  var customPrimary = {
     '50': '#ffb280',
     '100': '#ffa266',
     '200': '#ff934d',
     '300': '#ff8333',
     '400': '#ff741a',
     '500': 'rgba(255, 100, 0, 1)',
     '600': '#e65a00',
     '700': '#cc5000',
     '800': '#b34600',
     '900': '#993c00',
     'A100': '#ffc199',
     'A200': '#ffd1b3',
     'A400': '#ffe0cc',
     'A700': '#803200'
 };
 $mdThemingProvider
     .definePalette('customPrimary',
                     customPrimary);

 var customAccent = {
     '50': '#011084',
     '100': '#01139e',
     '200': '#0116b7',
     '300': '#0119d1',
     '400': '#011cea',
     '500': '#0724fe',
     '600': '#3950fe',
     '700': '#5367fe',
     '800': '#6c7dfe',
     '900': '#8694fe',
     'A100': '#3950fe',
     'A200': 'rgba(32, 58, 254, 0.3)',
     'A400': '#0724fe',
     'A700': '#9faaff'
 };
 $mdThemingProvider
     .definePalette('customAccent',
                     customAccent);

 var customWarn = {
     '50': '#f79797',
     '100': '#f57f7f',
     '200': '#f36868',
     '300': '#f15050',
     '400': '#ef3939',
     '500': '#ed2121',
     '600': '#e21212',
     '700': '#cb1010',
     '800': '#b30f0f',
     '900': '#9b0d0d',
     'A100': '#f8afaf',
     'A200': '#fac6c6',
     'A400': '#fcdede',
     'A700': '#840b0b'
 };
 $mdThemingProvider
     .definePalette('customWarn',
                     customWarn);

 var customBackground = {
     '50': '#ffffff',
     '100': '#ffffff',
     '200': '#ffffff',
     '300': '#ffffff',
     '400': '#ffffff',
     '500': '#fff',
     '600': '#f2f2f2',
     '700': '#e6e6e6',
     '800': '#d9d9d9',
     '900': '#cccccc',
     'A100': '#ffffff',
     'A200': '#ffffff',
     'A400': '#ffffff',
     'A700': '#bfbfbf'
 };
 $mdThemingProvider
     .definePalette('customBackground',
                     customBackground);

$mdThemingProvider.theme('default')
    .accentPalette('customAccent')
    .warnPalette('customWarn')
    .backgroundPalette('customBackground')
}
