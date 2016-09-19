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

//<input id="whichkey" value="click here">
//<div id="log"></div>

// B = which: 66 
//  keyCode: 66 
//    shiftKey: true   lower = false
//     altKey: false 
//    ctrlKey: false 
//   metaKey: true

// R = which: 82 
//  keyCode: 82
//    shiftKey: true   lower = false
//     altKey: false 
//    ctrlKey: false 
//   metaKey: false
   
// Y = which: 89 
//  keyCode: 89 
//    shiftKey: true   lower = false
//     altKey: false 
//    ctrlKey: false 
//   metaKey: false
   
// G = which: 71 
//  keyCode: 71 
//    shiftKey: true   lower = false
//     altKey: false 
//    ctrlKey: false 
//   metaKey: false
   
// O = which: 79 
//  keyCode: 79 
//    shiftKey: true   lower = false
//     altKey: false 
//    ctrlKey: false 
//   metaKey: false