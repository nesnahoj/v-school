//Warmup problem for today. Write a function that given a list of non negative integers, arranges them such that they form the largest possible number. For example, given [50, 2, 1, 9], the largest formed number is //95021. It's a bit of a brain teaser so try to solve it on your own but feel free to do some research if you get stuck.

//I would want to loop through an array of numbers and find the largest one, then itterate back through with a loop for the next, and so on.

// var largestPossNum = function() {
//     for(i=0; i<=string.length-1;i++);
//     return(largest num and remaining string is reduced in length by that number)
//     when string.length == 0, console.log(largestPossNum);
// }

//function myFunction() {
//    document.getElementById("demo").innerHTML = Math.max(5, 10, 2, 4, 100, -1

// below is the working code that michael came up with.

var largestPossNum = function(arr) {
var holder = [];
var sortedArr = arr.sort().reverse();
return Number(sortedArr.join(''));
};

console.log(largestPossNum([50, 2, 1, 9]));
// prints - 95021
