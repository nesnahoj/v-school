var app = angular.module("app", []);

app.controller("controller", function($scope) {
  $scope.userInput = {};
  $scope.images = JSON.parse(localStorage.getItem("images")) || [];
  $scope.new = function() {
    $scope.images.push({
      url: $scope.userInput.url,
      description: $scope.userInput.description,
      reason: $scope.userInput.reason
    })
    localStorage.setItem("images", JSON.stringify($scope.images));
    $scope.userInput = {};
  }
});
