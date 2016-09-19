describe("simple calculators 1st ADD, 2nd MULT, 3rd SUB & 4th DIV", function() {
  it("should add 2 numbers together", function() {
    expect(add(2, 2)).toBe(4);
  })

  describe("mult", function() {
  it("should mult 2 numbers", function() {
    expect(mult(3, 2)).toBe(6);
  })
  })

  describe("sub", function() {
  it("should sub 2 numbers", function() {
    expect(sub(4, 6)).toBe(-2);
  })
})
  describe("div", function() {
    it("should div 2 numbers", function () {
      expect(div(4, 1)).toBe(4);
    })
  })
});

// nesting of repeated describe statements is
// not necessary especially since the primary
// function is similar.
