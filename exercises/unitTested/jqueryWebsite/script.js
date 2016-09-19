  $("#bttn1").click(function() {
    $("#addHere").html($("#b4Btn").val());
  });

  $("#bttn2").click(function() {
    if ($("input:radio[id='false1']:checked").val() === "no"){
      alert("I guess you weren't paying attention");
    } else if($("input:radio[id='false2']:checked").val() === "no") {
      alert("Riiiiiight....");
    } else if($("input:radio[id='true']:checked").val() === 'yes') {
      alert("Congratulations!!! You were watching!");
    }
});
