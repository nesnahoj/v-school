/*  Create Constructor function for parties  */
var Party = function(name, population) {
  this.name = name;
  this.population = population;
};

/*  Create function to see who strikes first */
var firstStrike = function() {
  var min = 1;
  var max = 3;
  var coin = Math.floor(Math.random() * (max - min) + min);
  if(coin == 1) {
    return("penguins");
  } else if(coin == 2) {
    return("commies");
  }
};
 // console.log(strike());

 var coinToss = function() {
   var min = 1;
   var max = 3;
   var coin = Math.floor(Math.random() * (max - min) + min);
   if(coin == 1) {
     return(true);
   } else if(coin == 2) {
     return(false);
   }
 };

var sendNuke = function(party, onHit, onMiss) {
  if(coinToss()) {
    onHit(party);
  } else {
    onMiss(party);
  }
};
//  console.log(sendNuke());

var hit = function(party) {
  var damageMax = 40;
  var damageMin = 2;
  var damage = Math.floor(Math.random() * (damageMax - damageMin) + damageMin);
  if(damage <= 40 && damage > 32) {
    party.population -= damage;
    console.log(party.name + ", you lost 1/3 of your population!");
  } else if(damage <= 32 && damage > 25) {
    party.population -= damage;
    console.log(party.name + ", you lost 1/4 of your population!");
  } else if(damage <= 25 && damage > 18) {
    party.population -= damage;
    console.log(party.name + ", you lost about 15% of your population!");
  } else if(damage <= 18 && damage > 10) {
    party.population -= damage;
    console.log(party.name + ", you have lost 10% of your population!");
  } else if(damage <= 10 && damage > 0) {
    party.population -= damage;
    console.log(party.name + ", you have lost almost your entire population!");
  } else {
    party.population -= damage;
    console.log(party.name + ", you have been defeated!");
  }
};
//  console.log(onHit("Commies"));

var miss = function(party) {
//  callback func if missed

    console.log(party.name + ", return fire before they reload!");
};
// console.log(onMiss(penguins));

var main = function() {
  var turn = firstStrike();
  var commies = new Party("Commies", 1000000);
  var penguins = new Party("Penguins", 1000000);

  while(commies.population > 0 && penguins.population > 0) {
    if(turn == "penguins") {
      sendNuke(commies, hit, miss);
      turn = "commies";
    } else {
      sendNuke(penguins, hit, miss);
      turn = "penguins";
    }
  }
  // console.log(penguins.population);
  // console.log(commies.population);

  if(penguins.population <= 0) {
    console.log("Penguins Lost!!");
  } else {
    console.log("Commies you Lost!!");
  }
};
main();
