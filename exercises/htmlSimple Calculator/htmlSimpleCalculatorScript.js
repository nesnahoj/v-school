/*
add prompt for user input (use placeholder)
add features of opperators
add prompt for 2nd user input(placeholder)
add operation capabilities to each operator feature
allow submit for tallying of user inputs.
*/

//var simpleCalculator = function() {
//    var inputElem = document.getElementById("userInput");
//    var outputElem = document.getElementById("box");
//    var buttonElem = document.getEementById("Submit");
//    
//    buttonElem.addEventListener("click", function() {
//        outputEleme.innerHTML = "Hello, " +inputElem.value + "how are you?";
//    });
//};



var numOut = document.getElementById("numOut");


var output1 = document.getElementById("output1");

var htmlAddCalculator = function () {
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
// use parseInt(string1) + parseInt(string2);
output1.innerHTML = (+num1 + +num2);
};
numOut.addEventListener("click", htmlAddCalculator);

/////////////////////////////////////////////////////////

var ansOut = document.getElementById("ansOut");


var output2 = document.getElementById("output2");

var htmlSubCalculator = function () {
    var num3 = document.getElementById("num3").value;
    var num4 = document.getElementById("num4").value;
output2.innerHTML = (num3 - num4);
};
ansOut.addEventListener("click", htmlSubCalculator);

/////////////////////////////////////////////////////////

var multOut = document.getElementById("multOut");


var multOutput = document.getElementById("multOutput");

var htmlMultCalculator = function () {
    var int1 = document.getElementById("int1").value;
    var int2 = document.getElementById("int2").value;
multOutput.innerHTML = (int1 * int2);
};
multOut.addEventListener("click", htmlMultCalculator);

/////////////////////////////////////////////////////////

var divOut = document.getElementById("divOut");


var divOutput = document.getElementById("divOutput");

var htmlDivCalculator = function () {
    var div1 = document.getElementById("div1").value;
    var div2 = document.getElementById("div2").value;
divOutput.innerHTML = (div1 / div2);
};
divOut.addEventListener("click", htmlDivCalculator);