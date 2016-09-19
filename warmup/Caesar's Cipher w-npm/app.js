var ask = require("readline-sync");

var question = ask.question("What phrase would you like to encrypt?" + " ");
var shift = parseInt(ask.question("How many letters would you like to shift?" + " "));
// console.log(question);
// console.log(shift);

var input = (question.split(""));
// console.log(input);  // +++ input is the question split
var encrypt = function(letter, key) {
  var alpha = "abcdefghijklmnopqrstuvwxyz".split("");
  // console.log(alpha); // +++ alpha is the alphabet split into an array
  var originalIndex = alpha.indexOf(letter);
  // console.log(index);  //index is now a number that represent the letter in the alphabet.
  var shiftedIndex = (originalIndex + key);
  // now a series of numbers represents the encrypted characters. reverse the index onto the numbers
  if(shiftedIndex > alpha.length-1) {
    shiftedIndex = shiftedIndex % alpha.length;
  } else if(shiftedIndex < 0) {
    shiftedIndex = shiftedIndex % alpha.length;
    shiftedIndex = alpha.length + shiftedIndex
  }
  return alpha[shiftedIndex];
};

var encryptedText = "";
  for(i = 0; i < input.length; i++) {
  // encrypt(input[i], shift);
  encryptedText += encrypt(input[i], shift)
};
console.log(encryptedText + " - this is the encrypted text.");

var encryptedArr = encryptedText.split("");
var decryptedText = "";
for(i = 0; i < encryptedArr.length; i++) {
  decryptedText += encrypt(encryptedArr[i], shift * - 1);
}
console.log(decryptedText + " - this is the decrypted text.");
