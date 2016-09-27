var app = angular.module("app", []);

app.service("images", function() {
  this.data = JSON.parse(localStorage.getItem("images")) || [];
  this.addImage = function(description, url, reason) {
    this.data.push({description: description, url: url, reason: reason});
    localStorage.setItem("images", JSON.stringify(this.data));
  }
})
app.controller("controller", function($scope, images) {
  $scope.userInput = {};
  $scope.images = images.data;
  $scope.new = function() {
    images.addImage($scope.userInput.description, $scope.userInput.url, $scope.userInput.reason);
    $scope.userInput = {};
    $scope.images = images.data;
  }
});
