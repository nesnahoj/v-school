describe("get the letter Frequency in a string", function() {
  it("would itterate through an array to tell how many of each letter are in the string", function() {
    expect(howMany("aaaa")).toEqual({a: 4});
  });

  it("would itterate through an array to tell how many of each letter are in the string", function() {
    expect(howMany("ain't ain't a word")).toEqual({a: 3, i: 2, n: 2, "'": 2, t: 2, " ":3, w: 1, o: 1, r: 1, d: 1});
   });

   it("would itterate through an array to tell how many of each letter are in the string", function() {
     expect(howMany("BbBbBBbb")).toEqual({b: 8});
    });
});
