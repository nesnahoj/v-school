var Shopper = function(name, age, country, alive) {
    this.name = name;
    this.age = age;
    this.country = country;
    this.alive = alive;
};

Shopper.prototype.shop = function() {
    return["eggs", "milk"] ;
}

var sally = new Shopper("Sally", 55, "USA", true);

console.log(sally.shop());