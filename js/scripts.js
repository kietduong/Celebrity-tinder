$(document).ready(function() {
  $("form#celebrity").submit(function(event) {
    var age = parseInt($("input#age").val());
    var gender = $("select#gender").val();
    $("#button").click(function() {
      $("#beebz").hide();
      $("#derrick").hide();
      $("#ken").hide();
      $("#marg").hide();
      $("#rebel").hide();
      $("#betty").hide();
    });


    if(age) {
      if (age < 30 && gender === "male") {
        $("#beebz").show();
      } else if (age > 30 && age <50 && gender === "male") {
        $("#derrick").show();
      } else if (age > 50 && gender === "male") {
        $("#ken").show();
      } else if (age < 30 && gender === "female") {
        $("#marg").show();
      } else if (age > 30 && age <50 && gender === "female") {
        $("#rebel").show();
      } else {
        $("#betty").show();
      }
  
    }




    event.preventDefault();
  });
});
