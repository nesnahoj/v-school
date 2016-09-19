var counter = 0;
var removeItem = function(index){
  $("#" + index).fadeOut();
};

$("#submit").on("click", function() {
  var newItem = $("<li id=" + counter + ">" + "<button onclick = 'removeItem(" + counter + ")'>X</button>" + $("#input").val() + "</li>");
  $("#output").append(newItem);
  $("#input").val("");
  counter++;
});
