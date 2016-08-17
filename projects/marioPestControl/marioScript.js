var addGoombas = document.getElementById("goomba");
var goombasCaught = document.getElementById("goombasCaught");
var goombaOutput = document.getElementById("totalGoombas");
var goombaPrice = document.getElementById("goombasCharge");

var totalGoombas = function () {
    goombaOutput.innerHTML = parseInt(goombaOutput.innerHTML) + parseInt(goombasCaught.value);
};

var goombasCharge = function() {
    goombaPrice.innerHTML = parseInt(goombaOutput.innerHTML) * 5;
    };


addGoombas.addEventListener("click", function() {
    totalGoombas();
    goombasCharge();
});


// ////////////////////////////////////////////////////////////////

// lines below are for the Bob-Ombs

var addBobOmbs = document.getElementById("bobOmbs");
var bobOmbsInput = document.getElementById("bobOmbsInput");
var bobOmbsOutput = document.getElementById("totalBobOmbs");
var bobOmbsPrice = document.getElementById("bobOmbsPrice");

var totalBobOmbs = function() {
  bobOmbsOutput.innerHTML = parseInt(bobOmbsOutput.innerHTML) + parseInt(bobOmbsInput.value);  
};

var bobOmbsCharge = function() {
    bobOmbsPrice.innerHTML = parseInt(bobOmbsOutput.innerHTML) * 7;
};

addBobOmbs.addEventListener("click", function() {
    totalBobOmbs();
    bobOmbsCharge();
});


// ////////////////////////////////////////////////////////////////

// lines below are for the Cheep-Cheeps

var addCheepCheeps = document.getElementById("cheepCheeps");
var cheepCheepsInput = document.getElementById("cheepCheepsInput");
var cheepCheepsOutput = document.getElementById("totalCheepCheeps");
var cheepCheepsPrice = document.getElementById("cheepCheepsPrice");

var totalCheepCheeps = function () {
    cheepCheepsOutput.innerHTML = parseInt(cheepCheepsOutput.innerHTML) + parseInt(cheepCheepsInput.value);
};

var cheepCheepsCharge = function() {
    cheepCheepsPrice.innerHTML = parseInt(cheepCheepsOutput.innerHTML) * 11;
};

addCheepCheeps.addEventListener("click", function() {
    totalCheepCheeps();
    cheepCheepsCharge();
});