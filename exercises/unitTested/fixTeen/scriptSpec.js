describe("Fix Teen, given 3 int values, return their sum. If any values are a teen 13 to 19 they count as 0, except 15 and 16 do not count as 'teens' and should therefore still be added. Write a separate helper function fixTeen(n). that takes in an integer value and returns that value fixed for the teen rule", function() {
  it("should be a sum", function() {
    expect(noTeenSum(3, 13, 2)).toBe(5);
  });
  it("should be a sum of 14, 13, 17", function() {
    expect(noTeenSum(14, 13, 17)).toBe(0);
  });
  it("should be a sumwhen the numbers are 100, 1 and 18", function() {
    expect(noTeenSum(100, 1, 18)).toBe(101);
  });
  it("the numbers should total 17 when they are 16, 1, and 17", function() {
    expect(noTeenSum(16, 1, 17)).toBe(17);
  });
  it("should when 31 when 15, 16, and 17 are used", function() {
    expect(noTeenSum(15, 16, 17)).toBe(31);
  });
});
