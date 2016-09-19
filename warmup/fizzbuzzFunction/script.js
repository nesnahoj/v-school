// function that produces "Fizz" when / 3 "Buzz" when / 5 && "FizzBuzz" when / 3 && 5 appropriately with any passed in range.

var fizzbuzz = function(low, topOfRange) {
  var y = topOfRange;
  var output = [];
  for(var x = low; x <= y; x++) {
    if(x % 3 === 0 && x % 5 === 0) {
      output.push("FizzBuzz");
    } else if(x % 3 === 0) {
      output.push("Fizz");
    } else if(x % 5 === 0) {
      output.push("Buzz");
    } else {
      output.push(x)
    }
  }
  return output;
};
 console.log(fizzbuzz(0, 15));
