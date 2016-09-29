var app = angular.module("cart", []);

app.service("shoppingCart", function() {
  this.cart = JSON.parse(localStorage.getItem("items")) || [];
  this.addItem = function(itemName, quantity) {
    this.cart.push({itemName: itemName, quantity: quantity});
    localStorage.setItem("items", JSON.stringify(this.cart));
  }
  this.removeItem=function(index) {
    this.cart.splice(index, 1);
    localStorage.setItem("items", JSON.stringify(this.cart));
  }
});

app.controller("control", function($scope, shoppingCart) {
  $scope.userInput = {};
  $scope.items = shoppingCart.cart;
  $scope.addItem = function(itemName, quantity) {
    shoppingCart.addItem($scope.userInput.itemName, $scope.userInput.quantity);
    $scope.userInput = {};
    $scope.items = shoppingCart.cart;
  };
  var setFocus = function() {
    var input =  document.getElementById("theFieldID");
    input.focus();
  };
  $scope.removeItem = function(index) {
    shoppingCart.removeItem(index);
    $scope.items = shoppingCart.cart;
  };

});
