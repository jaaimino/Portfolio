'use strict';

angular.module('jaimino')
  .config(function ($stateProvider) {
    $stateProvider
      .state('organizations', {
        url: '/activities/organizations',
        templateUrl: 'app/organizations/organizations.html',
        controller: 'OrganizationsCtrl'
      });
  });