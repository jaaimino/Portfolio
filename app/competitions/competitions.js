'use strict';

angular.module('jaimino')
  .config(function ($stateProvider) {
    $stateProvider
      .state('competitions', {
        url: '/activities/competitions',
        templateUrl: 'app/competitions/competitions.html',
        controller: 'CompetitionsCtrl'
      });
  });