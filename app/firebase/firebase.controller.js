'use strict';

angular.module('jaimino')
  .controller('FirebaseCtrl', function ($scope, $firebaseArray) {
    var ref = new Firebase("https://jaiminodotcom.firebaseio.com/");
    ref.authWithPassword({
      email    : "test@test.com",
      password : "test"
    }, function(error, authData) {
        if(error){
            console.log(error);
        } else {
            console.log("Authenticated successfully with payload:", authData);
            // create a synchronized array
            $scope.messages = $firebaseArray(ref);
            // add new items to the array
            // the message is automatically added to our Firebase database!
            $scope.addMessage = function() {
                $scope.messages.$add({
                  text: $scope.newMessageText
                });
            };
        }
        /* Your Code */ }, {
      remember: "sessionOnly"
    });
  });
