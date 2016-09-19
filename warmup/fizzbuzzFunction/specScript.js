describe("// function that produces 'Fizz' when / 3 'Buzz' when / 5 && 'FizzBuzz' when / 3 && 5 appropriately with any passed in range & it should output to an array.", function() {
  it("should allow 2 numbers to be passed in one as a low and one as a top of the range.", function() {
    expect(fizzbuzz(0, 15)).toEqual([ 'FizzBuzz', 1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz"]);
    })
});
