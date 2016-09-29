var app = angular.module("hits", []);

app.service("requests", function($http) {
  this.getHits = function(isSuccess, isFailure) {
    $http.get("http://mean.codingcamp.us:6543/hitlist.json").then(isSuccess, isFailure);
  }
});
// $localStorage.$reset();

app.controller("cntrl", function($scope, requests) {
  $scope.project = "$http hits";
  $scope.data = [];
  //isSuccess
  $scope.showHits = function(response) {
    $scope.data = response.data;
  };
  //isFailure
  $scope.logError = function(response) {
    console.log("Error code: " + response.status);
  };
  $scope.load = function() {
    requests.getHits($scope.showHits, $scope.logError);
  };
});
