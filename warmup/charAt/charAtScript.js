// print out each letter in a given string
//var string = "this is a string";
//
//for(i=0; i<string.length; i++) {
//    console.log(string.charAt(i));
//};


// print out only every odd "i"th
// character.

//var string = "this is a string";
//
//for(i=0; i<string.length; i++) {
//    if(i % 2 !==0){
//        console.log(string.charAt(i));
//    }
//};

//var output = function(input) {
//    for(i=0; i<input.length; i++) {
//    console.log(input.charAt(i));
//    }
//};
//
//output("Hello Jacob!");

var output = function(input) {
    for(i=0; i<input.length; i++) {
            if(i % 2 ==0) {
               console.log(input.charAt(i));
        }
    }
};
output("Jacob is Awesome!");
output("coding can be fun!");