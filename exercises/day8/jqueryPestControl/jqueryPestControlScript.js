// GOOMBAS FUNCTIONALITY
var addGoombas = $("#goomba");
var goombasCaught = $("#goombasCaught");
var goombaOutput = $("#totalGoombas");
var goombaPrice = $("#goombasCharge");

var totalGoombas = function() {
    goombaOutput.html(parseInt(goombaOutput.html()) + (parseInt(goombasCaught.val())));
  };

var goombasCharge = function() {
    goombaPrice.html(parseInt(goombaOutput.html() * 5));
  };

addGoombas.on("click", function() {
    totalGoombas();
    goombasCharge();
});

// lines below are for the Bob-Ombs
var addBobOmbs = $("#bobOmbs");
var bobOmbsInput = $("#bobOmbsInput");
var bobOmbsOutput = $("#totalBobOmbs");
var bobOmbsPrice = $("#bobOmbsPrice");

var totalBobOmbs = function() {
  bobOmbsOutput.html(parseInt(bobOmbsOutput.html()) + (parseInt(bobOmbsInput.val())));
};

var bobOmbsCharge = function() {
    bobOmbsPrice.html(parseInt(bobOmbsOutput.html() * 7));
};

addBobOmbs.on("click", function() {
    totalBobOmbs();
    bobOmbsCharge();
});

// lines below are for the Cheep-Cheeps
var addCheepCheeps = $("#cheepCheeps");
var cheepCheepsInput = $("#cheepCheepsInput");
var cheepCheepsOutput = $("#totalCheepCheeps");
var cheepCheepsPrice = $("#cheepCheepsPrice");

var totalCheepCheeps = function () {
    cheepCheepsOutput.html(parseInt(cheepCheepsOutput.html()) + (parseInt(cheepCheepsInput.val())));
};

var cheepCheepsCharge = function() {
    cheepCheepsPrice.html(parseInt(cheepCheepsOutput.html() * 11));
};

addCheepCheeps.on("click", function() {
    totalCheepCheeps();
    cheepCheepsCharge();
});
