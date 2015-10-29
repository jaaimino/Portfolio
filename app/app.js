'use strict';

angular.module('jaimino', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router',
  'ui.bootstrap',
  'chart.js',
  'angulartics',
  'angulartics.google.analytics',
  'firebase'
  //'angulartics.google.analytics'
])
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) {
    $urlRouterProvider
      .otherwise('/');
    //$locationProvider.html5Mode(true);
  });
