// describe("count 'code' starting with 'c' ending with 'e' but allow anything in place of 'd'", function() {
//   it("should be a string of 4 characters like 'come'", function() {
//     expect(possStr("somedingblattedDarnscrewedupphraseincludingcode")).toEqual("Word found: '" + phrase + "'.");
//   })

// describe("search for 'snicklefritz' starting with 's' ending with 'z' but allow anything in place of 'i'", function() {
//   it("should be a string of 12 characters like 'snicklefritz'", function() {
//     expect(possStr("somedingblattedsnicklefrotzDarnscrewedsnicklefrotzupphraseincludingsnicklefritzcode")).toEqual("Word found: '" + phrase + "'.");
//   })
// });

describe("search for 'snicklefritz' starting with 's' ending with 'z' but allow anything in place of 'i'", function() {
  it("should be a string of 12 characters like 'snicklefritz'", function() {
    expect(possStr("somedingblattedsnicklefrstzDarnscrewedupphraseincludingcode")).toEqual("Word found: '" + phrase + "'.");
  })
  it("ought to return 'undefined' if the word is not found in the context that it should be.", function() {
    expect(possStr("somedingblattedDarnscrewedupphraseincludingcode")).toEqual("Undefined");
  })
});
