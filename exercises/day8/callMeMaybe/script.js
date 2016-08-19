var names=["Anna", "Bill", "Charlay", "Dexter", "Emily", "Frank", "George", "Hal", "Isaac", "Jill"];

function attemptCall(name, dontCall, call, sendText) {

// the priority of the "if" and "else/if" statements matters.  If the first statement were to be one of the "else/if" statements then it would be prioritized according to it's placement in the entire sequence.  Since the conditions state that if the name contains 2 A's, 'upper or lowercase', and that takes priority over the other conditions, then that conditional statement needs to come first.  ("Highest Priority First").

    if(name.toLowerCase().split("a").length > 2) {
        sendText(name);
    } else if(name.length % 2 ==0) {
        call(name);
    } else if(name.length % 2 !== 0) {
        dontCall(name);
    }
}

// call the dontCall function within the attemptCall()
var x = function(name) {
    console.log("You didn't call " + name + ".");
};


// call function within the attemptCall()
var y = function(name) {
    console.log("You need to call " + name + ".");
};


// sendText function within the attemptCall()
var z = function(name) {
    console.log("Send a text to " + (name) + ".")
}

// now implement the for loop.
for(var i = 0; i < names.length; i++) {
    attemptCall(names[i], x, y, z);
}

//final output is the following:
//
//Macintosh:callMeMaybe joshualepinski$ node script.js
//
//     Send a text to Anna.
//     You need to call Bill.
//     Send a text to Charlay.
//     You need to call Dexter.
//     You didn't call Emily.
//     You didn't call Frank.
//     You need to call George.
//     You didn't call Hal.
//     Send a text to Isaac.
//     You need to call Jill.
//
//Macintosh:callMeMaybe joshualepinski$