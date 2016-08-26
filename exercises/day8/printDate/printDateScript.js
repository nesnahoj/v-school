//console.log(Date());

// Today is: Friday
// Current time is: 4:52:40 PM

// the '//' code below returns 'Today is: 23.

var d = new Date();
var date = function () {
   console.log("Today is: " + d.getMonth() + "/" + d.getDate() + "/" + d.getFullYear () + ". The time is: " + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds() + ":" + d.getMilliseconds());
};
date();