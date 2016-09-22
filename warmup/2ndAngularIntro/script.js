var app = angular.module("myApp", []);

app.controller("mainController", function($scope) {
  $scope.userInput = "";
  $scope.userInput2 ="";
  $scope.name = "";
  $scope.change = function() {
    $scope.output = $scope.userInput + " and " + $scope.userInput2 +" are 2 very good names.";
  };
});
