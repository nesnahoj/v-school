describe("testing largestPossNum function", function() {
it("given an array of numbers combine the integers to return the largest number possible, the function should not split the multiple digit numbers like 50 or 100, etc.", function(){
  expect(largestPossNum([50, 2, 1, 9])).toBe(95021);
})
});
