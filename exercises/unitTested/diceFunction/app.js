// Jacob Evans [08:07]
// A constructor functions that makes a dice object. The dice object will take a range of numbers
// and will have a method that returns a random number in between those ranges.
// Use that constructor function to make a 7 or 11 game. With unit tests Yeah!!!

var Dice = function(min, max) {
  this.min = Math.ceil(min);
  this.max = Math.floor(max);
  this.roll = function() {
    return Math.floor(Math.random() * (this.max - this.min) + this.min);
  }
};
