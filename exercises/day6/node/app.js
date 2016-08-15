var jacob = {
	name: "Jacob",
	age: 18,
	livesCity: "Murray",
	pets: "unknown",
	alive: true,
	intro: function() {
		return "Hi, my name is " +this.name+ ", I am " +this.age+ " years old. I live in " +this.livesCity+ ", with " +this.pets+ " pets.";
	}
};

jacob.intro();
console.log(jacob.intro());


// -///////////////////////////////////////////////////////////////
// var Person = function(name, age, livesCity, pets, alive) {
// 	this.name=name;
// 	this.age=age;
// 	this.livesCity=livesCity;
// 	this.hasPets=function() {
// 		return this.pets;
// 	}
// 	this.alive=alive;
// 	this.pets=pets;
// }

// var jeremy = new Person("Jeremy", 46, "Orem", true, true); 

// jeremy.hasPets();
// console.log(jeremy.hasPets());


// -///////////////////////////////////////////////////////////////
// var branden=new object();
// branden.name= "Branden";
// branden.age= 44;
// branden.livesCity= "Woodland Hills";
// branden.alive= true;

// branden.isAlive=function() {}


// new Person = (name: "John", age: 50);
// Person(name, age);

// var person = {name:"John", age:50};
// document.getElementById("demo").innerHTML = 
// person.name + " is " + person.age + " years old.";
