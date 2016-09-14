var addName = $("#addName");
var addEntry = $("#addEntry");
var trashTalkArr = ["What a slacker, my dead grandma could do better than that!", "That's not a score, it's an embarrassment!", "That's hilarious. Did you actually try playing the game?", "Alright my unborn sister did better than that last night."];
var trashTalk = function() {
  min = Math.ceil(0);
  max = Math.floor(trashTalkArr.length);
  index = Math.floor(Math.random() * (max - min) + min);
  return(trashTalkArr[index]);
};

var Person = function(firstName, lastName, game, date, score) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.game = game;
  this.date = date;
  this.score = score;
};

var addEntry = function() {
  var firstName = $("#first").val();
  var lastName = $("#last").val();
  var game = $("#game").val();
  var date = $("#date").val();
  var score = $("#score").val();
  var instance = new Person(firstName, lastName, game, date, score);
  if(firstName == "" || lastName == "" || game == "" || date == "" || score == "") {
    alert("You are a dumkopf! You need to enter something in each field!")
  } else if ($("#checkbox").prop("checked")) {
    $("#parent").append("<div><h4 class='name-h4'>" + instance.firstName + "</h4><h4 class='name-h4'>" + instance.lastName + "</h4><p>Game: " + instance.game + "</p><p> Score: " + instance.score + "</p><p> Date: " + instance.date + "<p></p> " + trashTalk() + "");
  } else {
    $("#parent").append("<div><h4>" + instance.firstName + "</h4><h4>" + instance.lastName + "</h4><p>Game: " + instance.game + "</p><p> Score: " + instance.score + "</p><p> Date: " + instance.date + ".");
  }
};

  $("#bttn").on("click", addEntry);
