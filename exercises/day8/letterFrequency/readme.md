Letter Frequency
18 MAY 2015 on Exercise, Programming Principles, Level 2
Find the frequency of all the letters in a given word or phrase, and print them to the console.

Example:

var phrase = 'slimy smelly solution';  
frequency example

Extra Credit
Also output the original string with all duplicate letters removed. (i.e. slimy eoutn)

Extra Extra Credit
Display the list of letters in sorted order by frequency.

sorted

Robert Williams



var phrase = "slimy smelly solution";
var i;
var output = {};

for(i = 0; i < phrase.length; i++) {

    if (output[phrase.charAt(i)]==undefined) {
output[phrase.charAt(i)]=1;
} else {
    output[phrase.charAt(i)] = output[phrase.charAt(i)]+1;
}
}
console.log(output);


//[object Object] {
//   : 2,
//  e: 1,
//  i: 2,
//  l: 4,
//  m: 2,
//  n: 1,
//  o: 2,
//  s: 3,
//  t: 1,
//  u: 1,
//  y: 2
//}