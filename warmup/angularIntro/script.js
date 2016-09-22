var app = angular.module("myApp", []);

app.controller("mainController", function($scope) {
  $scope.userInput = "";
  $scope.name = "";
  $scope.change = function() {
    alert("Hi, " + $scope.userInput + ".");
  };
});
