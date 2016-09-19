var addName = $("#addName");
var addEntry = $("#addEntry");
var trashTalkArr = ["What a slacker, my dead grandma could do better than that!", "That's not a score, it's an embarrassment!", "That's hilarious. Did you actually try playing the game?", "Alright my unborn sister did better than that last night."];
var trashTalk = function() {
  min = Math.ceil(0);
  max = Math.floor(trashTalkArr.length);
  index = Math.floor(Math.random() * (min - min) + min);
  return(trashTalkArr[index]);
};

// addEntry.on("click", function() {
//   summary();
// });
//var addName = function() {
//
//};

// Constructor function
var Person = function(firstName, lastName, game, date, score) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.game = game;
    this.date = date;
    this.score = score;
};

var addEntry = function() {
  var firstName = $("#firstName").val();
  var lastName = $("#lastName").val();
  var game = $("#game").val();
  var date = $("#date").val();
  var score = $("#score").val();
  var person = new Person(firstName, lastName, game, date, score);
if(firstName == "" || lastName == "" || game == "" || date == "" || score == "") {
  alert("You Dork! You need to fill out all of the form!")
} else if ($("#checkbox").prop("checked")) {
  $("#parent").append("<div><h4>" + person.firstName + "</h4><h4>" + person.lastName + "</h4><p>Game: " + person.game + "</p><p> Score: " + person.score + "</p><p> Date: " + person.date + " " + trashTalk()) + "";
} else {
  $("#parent").append("<div><h4>" + person.firstName + "</h4><h4>" + person.lastName + "</h4><p>Game: " + person.game + "</p><p> Score: " + person.score + "</p><p> Date: " + person.date + ".");
}
}
$("#submit").on("click", addEntry);
