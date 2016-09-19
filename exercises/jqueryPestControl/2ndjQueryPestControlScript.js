// GOOMBAS FUNCTIONALITY
var addGoombas = $("#goomba");
var goombasCaught = $("#goombasCaught");
var goombaOutput = $("#totalGoombas");
var goombaPrice = $("#goombaPrice");

var totalGoombas = function() {
  goombaOutput.html(parseInt(goombaOutput.html()) + (parseInt(goombasCaught.val())));
};

var goombasCharge = function() {
  goombaPrice.html = (parseInt(goombaOutput.html() * 5));
};

addGoombas.on("click", function() {
  totalGoombas();
  goombasCharge();
});

// BOB-OMBS FUNCTIONALITY
var addBobOmbs = $("#bobOmbs");
var bobOmbsCaught = $("#bobOmbsCaught");
var bobOmbsOutput = $("#totalBobOmbs");
var bobOmbsPrice = $("#bobOmbsPrice");

var totalBobOmbs = function() {
  bobOmbsOutput.html(parseInt(bobOmbsOutput.html()) + (parseInt(bobOmbsCaught.val())));
};

var bobOmbsCharge = function() {
  bobOmbsPrice.html(parseInt(bobOmbsOutput.html() * 7));
};

addBobOmbs.on("click", function(){
  totalBobOmbs();
  bobOmbsCharge();
});

// CHEEP-CHEEPS FUNCTIONALITY
var addCheepCheeps = $("#cheepCheeps");
var cheepCheepsCaught = $("#cheepCheepsCaught");
var cheepCheepsOutput = $("#totalCheepCheeps");
var cheepCheepsPrice = $("#cheepCheepsPrice");

var totalCheepCheeps = function() {
  cheepCheepsOutput.html(parseInt(cheepCheepsOutput.html()) + (parseInt(cheepCheepsCaught.val())));
};

var cheepCheepsCharge = function() {
  cheepCheepsPrice.html(parseInt(cheepCheepsOutput.html() * 11));
};

addCheepCheeps.on("click", function() {
  totalCheepCheeps();
  cheepCheepsCharge();
});
