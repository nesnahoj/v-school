var app = angular.module("myApp", []);

app.controller("controller", function($scope) {
  $scope.userInput = {};

  $scope.new = function() {
    console.log($scope.userInput);
    $scope.badges.push({
      name: $scope.userInput.firstName + " " + $scope.userInput.lastName,
      houseNumber: $scope.userInput.houseNumber,
      street: $scope.userInput.street,
      city: $scope.userInput.city,
      state: $scope.userInput.state,
      zip: $scope.userInput.zip,
      phone: $scope.userInput.phone,
      email: $scope.userInput.email
    })
    $scope.userInput = {};
  }

  $scope.badges = [
  ]
});
