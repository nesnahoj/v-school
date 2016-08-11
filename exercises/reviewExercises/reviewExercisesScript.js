//http://eloquentjavascript.net/03_functions.html (see exercise file from Jacob).

/*Exercise 1 - Minimum
return the smallest of the integers in a given set of arguments
The googled results gave me the info below.  I didn't like that because it wasn't code I was familiar with at all.  I wanted to use code that was capable of using other argument sets in the future. 
        function myFunction() {
            document.getElementById("demo").innerHTML = Math.min(5, 10);
            }
*/

//var min = function(x, y) {
//
//return Math.min(x, y);
//};
//   var a = min(3, -3);
//var b = min(4, -4);
//var c = min(-10, 10);
//console.log(c);

/*

*/


/*Exercise 2 - Recursion
Define a recursive function isEven corresponding to this description. The function should accept a number parameter and return a Boolean.
Test it on 50 and 75. See how it behaves on -1. Why? Can you think of a way to fix this?

The googled results gave me several results.  In the case of recursion I didn't seem to find anything that was applicable.  I knew that I could run it through an if/else using modulo.  I needed help with placing 'i' in the function declaration and a couple of syntax factors with '}'.  My reults came back properly in each case.
*/

/*
var isEven = function (i) {
  if(i % 2 === 0) {
    return(true);
} else {
  return(false);
}
};
console.log(isEven(50));
true
console.log(isEven(75));
false
console.log(isEven(-1));
??
*/


// Exercise 3 - Bean Counting
// Write a function countBs that takes a string as its only argument and returns a number that indicates how many uppercase “B” characters are in the string.

// Next, write a function called countChar that behaves like countBs, except it takes a second argument that indicates the character that is to be counted (rather than counting only uppercase “B” characters).
// Rewrite countBs to make use of this new function.

// Your code here.

objects and for loops thats all that it takes
var ("") {
for(var i=0; i<string.length; i++) {
    if(countBs("") === "b") {
        for(var B = i; B<string.length + i); J++) {hits.push(countBs(b)}; 
    }
}
    
}
    var countBs = function(string, letter, caseSensitive) {
    var count = 0;
    if ( !caseSensitive) {
        string = string.toUpperCase();
        letter = letter.toUpperCase();
    }
    for (var i=0, l=string.length; i<string.length; i += 1) {
        if (string[i] === letter) {
            count += 1;
        }
    }
    return count;
};
console.log(BBC);
                            
                                                   
        var countBs = function(i) {
        var count = 0;
        //loop through the word
        for (i = 0; i<.length; i++) {
            //if the character in the word is equal to  the character passed in as a parameter increment count
            if (countBs(i) === "B") {
               //count++;
            }
        }
        };
        //return the sentence. 
        //return ("The letter " + ("") + " appears " + count + " times in the word " + countBs();
        console.log(countBs("BBC"));
                                                             
                                                             

                                                   /*
var countChar = function() {
    
}
console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4

/*  The googled results gave me the info below.  I didn't like that because it wasn't code I was familiar with at all.  I wanted to use code that was capable of using other argument sets in the future. 
        function myFunction() {
            document.getElementById("demo").innerHTML = Math.min(5, 10);
            }
*/


