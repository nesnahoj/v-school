var palindromeCheck = function(str) {
var result ="";
for(var i=str.length-1; i>=0; i--) {
  result += str.charAt(i);
    }
    if(str === result) {
    console.log("This is a palindrome!");
} else {
    console.log("This is NOT a palindrome!");
};
};

palindromeCheck("racecar");