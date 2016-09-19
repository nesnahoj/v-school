var delayFive = function() {
    alert("Did you get your name typed in?");
};

var button = document.getElementById("button");
button.addEventListener("click", function() {
    setTimeout(delayFive, 5000);    
});

alert("See if you can type your full name before another alert pops up.");


// ///////////////////////////////////////////////////


var button1 = document.getElementById("button1");
button1.addEventListener("click", function() {
    setTimeout(function() {
        alert("Hello Jacob!");
    }, 3000);
})

