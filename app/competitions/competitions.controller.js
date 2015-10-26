'use strict';

angular.module('jaimino')
  .controller('CompetitionsCtrl', function ($scope, $http, Competitions) {
  	$scope.competitions = Competitions.getCompetitions();
  });
