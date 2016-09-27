var app = angular.module("myApp", []);

app.controller("ctrl", function($scope) {
  $scope.show = false;
  $scope.userInput = {};
  $scope.add = function() {
    $scope.show = true;
  }
  $scope.showCity = false;
  $scope.userInput = {};
  $scope.cityBorn = function() {
    $scope.showCity = true;
  }
});
