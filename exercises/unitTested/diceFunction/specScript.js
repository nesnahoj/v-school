describe("constructor function that creates a dice that takes a range of numbers 'ie- 1-7' and will have a method that returns a random number in between those ranges. Use that constructor function to make a 7 or 11 game", function() {
  it("would have a range from 1-7 if it is a seven sided dice.", function() {
    var diceSeven = new Dice(1, 7);
    var num = diceSeven.roll();
    expect(num >= 1 && num <= 7).toBeTruthy();
  });
  it("would have a range between 1 & 11 inclusive when the dice is 11 sided.", function() {
    var diceEleven = new Dice(1, 11);
    var num = diceEleven.roll();
    expect(num >= 1 && num <= 11).toBeTruthy();
  })
});
