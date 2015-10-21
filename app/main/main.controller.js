'use strict';

angular.module('jaimino')
  .controller('MainCtrl', function ($scope, $http) {
    $scope.labels = ["January", "February", "March", "April", "May", "June", "July"];
    $scope.series = ['Clients'];
    $scope.data = [
      [65, 59, 80, 81, 72, 68, 80]
    ];
    $scope.onClick = function (points, evt) {
      console.log(points, evt);
    };
  });
