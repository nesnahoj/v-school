//Blue when the mouse hovers over the square
//Red when the mouse button is held down over the square
//Yellow when the mouse button is let go over the square
//Green when the mouse is double clicked in the square
//Orange when the mouse scroll is used somewhere in the window (not over the square).

var count = 0; 
var button = document.getElementById("djButton");
button.addEventListener("mouseover", function() {
button.style.backgroundColor="blue";
});
        
button.addEventListener("mouseout", function() {
    button.style.backgroundColor="pink";
});

button.addEventListener("mousedown", function() {
    button.style.backgroundColor="red";
});

button.addEventListener("mouseup", function() {
    button.style.backgroundColor="yellow";
    count +=1;
    console.log(count);
    if(count % 2 == 0) {
        button.style.backgroundColor="green";
    }
});

document.addEventListener("scroll", function() {
    button.style.backgroundColor="orange";
},false);