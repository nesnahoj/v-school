var app = angular.module("app", []);
app.controller("controller", function($scope) {
  $scope.userInput = {};
  $scope.people = [];
  $scope.add = function() {
    $scope.people.push({
      name: $scope.userInput.name,
      age: $scope.userInput.age
    });
    $scope.userInput = {};
  };
});
