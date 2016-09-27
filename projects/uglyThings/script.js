var app = angular.module("app", []);

app.controller("controller", function($scope) {
  $scope.userInput = {};
  $scope.images = [];
  $scope.new = function() {
    $scope.images.push({
      url: $scope.userInput.url,
      description: $scope.userInput.description,
      reason: $scope.userInput.reason
    })
    $scope.userInput = {};
  }
});
