var count = 0;
var window = document.getElementById="box";

box.addEventListener("mouseover", function () {
    box.style.backgroundColor="blue";
});

box.addEventListener("mousedown", function () {
    box.style.backgroundColor="red";
});

box.addEventListener("mouseup", function () {
    box.style.backgroundColor="yellow";
    count += 1;
    if(count % 2 == 0) {
        box.style.backgroundColor="green";
    }
});

document.addEventListener("scroll", function() {
    box.style.backgroundColor="orange";
},false);