'use strict';

angular.module('jaimino')
  .config(function ($stateProvider) {
    $stateProvider
      .state('firebase', {
        url: '/firebase',
        templateUrl: 'app/firebase/firebase.html',
        controller: 'FirebaseCtrl'
      });
  });