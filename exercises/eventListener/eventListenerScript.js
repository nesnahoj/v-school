var be = document.getElementById("button");
be.addEventListener("click", function() {
alert("The Button was Clicked! Next type your name into the text box below, then click 'Submit'."); 
});

var submitInput = document.getElementById("submitInput");
submitInput.addEventListener("click", function() {
alert("Hello " + document.getElementById("userInput").value +"! Now, hover over the Hover button below in the next event handler.");
});

var hoverButton = document.getElementById("hoverButton");

hoverButton.addEventListener("mouseover", function() {
    alert("You moused over the Hover button.");
});

hoverButton.addEventListener("mouseout", function() {
    alert("CONGRATULATIONS!!! You completed 4 event handlers that I programmed with minimal help.");
    });