var Person = function(name, totalCoins, status, star, gameActive) {
  this.name = name;
  this.totalCoins = totalCoins;
  this.status = status;
  this.star = star;
  this.gameActive = gameActive;

  // setName function to allow user to choose Mario or Luigi
  this.setName = function(namePicked) {
    this.name = namePicked;
  };

  // status state is passed in when called on by
  // gotHit callback function called whenever player is hit by an enemy. 4 status options: PoweredUp, Big, Small or Dead, (see 'status' in 'Person' constructor function).
  this.gotHit = function() {
    if(this.status == "POWEREDUP") {
      this.status = "Big";
    } else if(this.status == "Big") {
      this.status = "small";
    } else {
      this.status = "DEAD";
      this.gameActive = false;
    }
  };

  //gotPowerup function is called when a powerUp is received and sets status accordingly.
  this.gotPowerup = function() {
    if(this.status == "small") {
      this.status = "Big";
    } else {
      this.status = "POWEREDUP";
    }
  };

  // addCoin function to add a coin to totalCoins when one is collected
  this.addCoin = function() {
    totalCoins += 1;
  };

  // print function prints to the console the name, totalCoins. status, and star properties. should look nice such as:
  // bulletpoint Name: Luigi,
  // bulletpoint Status: Small, etc, etc.
  this.print = function() {
    console.log("Name: " + this.name);
    console.log("Coins: " + this.totalCoins);
    console.log("Status: " + this.status);
    console.log("Star: " + this.star);
  };
};

// randomRange function that returns 0, 1 or 2
// if the value is 0 call gotHit()
// if the value is 1 call gotPowerup()
// if the value is 2 call addCoin()
// then call the print function of the object
var randomRange = function(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min +1)) + min;
};
// console.log(randomRange(0, 2)); /* works for lines 54-59*/
var luigi = new Person("Luigi", 15, "POWEREDUP", true, true);

//perform the randomRange() op and call the print() 3 different times each.

while(luigi.gameActive === true) {
  var num = randomRange(0, 2);
  if(num == 0) {
    luigi.gotHit();
  } else if(num == 1) {
    luigi.gotPowerup();
  } else {
    luigi.addCoin();
  }
};
luigi.print();
