//var phrase = "slimy smelly solution";
//var i;
//var output = {};
//
//for(i = 0; i < phrase.length; i++) {
//
//    if (output[phrase.charAt(i)]==undefined) {
//output[phrase.charAt(i)]=1;
//} else {
//    output[phrase.charAt(i)] = output[phrase.charAt(i)]+1;
//}
//}
//console.log(output);


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


var phrase = ("slimy smelly solution");
var output = {};
var i;

for(i = 0; i < phrase.length; i++) {
    if((output[phrase.charAt(i)]==undefined)) {
       output[phrase.charAt(i)]=1;
} else {
    output[phrase.charAt(i)] =
        output[phrase.charAt(i)]+1;
}
}
console.log(output);