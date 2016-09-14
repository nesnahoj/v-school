// var fib = function(50) {
//   var a = 0, b = 1 , f = 1;
//   for(var i = 2; i <= n; i++) {
//     f = a + b
//   }
// }

var returnSumOfEvenFibNums = function(number) {
  var numbers = [0, 1];
  for(var i = 1; i < number; i += 1) {
    var prevIndex = numbers[i - 1];
    var sum = prevIndex + numbers[i];
    numbers.push(sum);
  }
    // find EVEN numbers in array
    var evens = numbers.filter(function(value) {
      return value % 2 == 0;
    });
    return evens.reduce(function(prev, curr) {
      return prev + curr;
    }, 0);
};
returnSumOfEvenFibNums(50);
