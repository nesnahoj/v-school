// Write a function that accepts two numbers as parameters, and returns the sum.

//var sum = function(num1, num2) {
//    var x = parseInt(num1);
//    var y = parseInt(num2);
//    return(x + y);
//};
//
//var a = prompt("enter a number");
//var b = prompt("enter another number");
//console.log(sum(a, b));


//Write a function that accepts three numbers as parameters, and returns the largest of those numbers.

//var largestNum = function(int1, int2, int3) {
//    if(int1 > int2 && int1 > int3) {
//      return(int1);
//    } else if(int2 > int3 && int2 > int1) {
//      return(int2);
//    } else if(int3 > int1 && int3 > int2) {
//      return(int3);
//    }  
//};
//console.log(largestNum(1, 2, 3));


//Write a function that accepts one number as a parameter, and returns whether that number is even or odd. (Return the string "even" or "odd");

//var evenOdd = function(i) {
//    if(i % 2 == 0) {
//        return("Even");
//    } else {
//        return("Odd");
//    }
//};
//console.log(evenOdd(17));


//Write a function that accepts a string as a parameter. If the length of the string is less than or equal to twenty characters long, return the string concatenated with itself (string + string). If the string is more than twenty characters long, return the first half of the string.

var concatIfOver21 = function(string) {
    var if21LongManip = function (string) {
        if(string.length<=21) {
        return(string + string);
        } else {
          return false;
        }
    };
      if(if21LongManip(string)) {
        return if21LongManip(string);
      }
   
    var resultHalf = function(string) {
        if(string.length>21) {
//             console.log(string);
          return(string.substring(0, string.length/2));
        } else {
          return false;
        }
    };
    if(resultHalf(string)) {
      return resultHalf(string);
    }
};
// the string passed in is 21 characters long.
console.log(concatIfOver21("isthis21characterslon"));