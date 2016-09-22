var app = angular.module("myApp", []);

app.controller("controller", function($scope) {
  $scope.userInput = {};
  $scope.output = {};

  $scope.change = function() {
    $scope.output = {
      name: $scope.firstName + " " + $scope.lastName,
      // streetNumber: $scope.houseNumber + " " + $scope.street,
      cityStZip: $scope.city + ", " +  $scope.state + ".",
      // + "  " + $scope.zip
      phone: $scope.phone + ",",
      email:"'" + $scope.email + "'."
    };
    $scope.userInput = {};
  }
});
