//console.log("Jacob is cool!");


/*

// for loop
var text = "ha la ha la hala Jeremy ha la ha la ha la hala ha la ha la hala ha la ha la hala ha la ha la haJeremylaha la ha la hala la ha la halaha la ha la hala ha la ha la hala ha la ha la halaha la";
var myName = "Jeremy";
var hits = [];

// look for JEREMY in the text string.
for(var i=0; i<text.length; i++) {
    if(text[i] === "J") {
    for(var J = i;J<(myName.length + i);J++) {
        hits.push(text[J]);
        }
    }
}

//prints "name not found" if not found.
if(hits.length === 0) {
    console.log("name not found");
} else {
    
//prints the number of times it was found
    console.log(hits);
}
*/



// function()
var multiply = function(x,y){
    return x * y;
};
multiply(7,6);
console.log(multiply(7,6))




/*
// while loop
var understand = true;
while(understand){
    console.log("This is a while loop");
    understand = false;
}
*/



/*
// Object
var Person = function(name, age) {
    this.name = name;
    this.age = age;
};
var bob = new Person("Bob", 32);

console.log(bob.name, bob.age);
*/