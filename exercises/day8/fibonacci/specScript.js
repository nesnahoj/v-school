// describe("produce the first 100 Fibonacci numbers. Then print out only the even ones.", function() {
//   it("includes only numbers that are created when adding the previous 2 numbers together", function() {
//     expect(0 + 1 == 1).toBe(1).
//   })
//   it("should retrun the sum of only the even fibonacci numbers",) function() {
//     expect(2 + 8 + 34).toBe(44).
//   })
// })

describe("produce a list of Fib nums then get the sum of the even fib nums", function() {
  it("should return 0 when no even numbers are in Fib list", function() {
    expect(returnSumOfEvenFibNums(1)).toBe(0);
  });
  it("should return 188 when 4 even numbers are in Fib list", function() {
    expect(returnSumOfEvenFibNums(12)).toBe(188);
  });
  it("should return 44 when 3 even numbers are in Fib list", function() {
    expect(returnSumOfEvenFibNums(9)).toBe(44);
  });
});
