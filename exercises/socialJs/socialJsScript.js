var Person = function (name, age, spouse, houses) {
    this.name = name;
    this.age = age;
    this.spouse = spouse;
    this.houses = houses;
};
    var Houses = function (number, street, aptNum, city, state, zip) {
        this.number = number;
        this.street = street;
        this.aptNum = aptNum;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.fullAddress = function() {
            return (this.number + " " +this.street + " " +this.aptNum + " " +this.city + " " +this.state + " " +this.zip);
        };                                                                                                 
    };
var House1 = new Houses("539 North", "Beverly Avenue", "n/a", "Orem", "Utah", "84057");
var House2 = new Houses("360 West", "400 North", "42", "Springville", "Utah", "84663");
var jeremy = new Person("Jeremy", 46, "Gina", [House1, House2]);
jeremy.children = "7";
jeremy.alive = true; console.log(jeremy);
console.log(jeremy.houses[0].fullAddress());