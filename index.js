$(".zero-warning1").hide();
$(".zero-warning2").hide();


var tip = 0;
var bill;
var people;
var customTip = 0;
var tipAmount;
var tipValue = 0;

//reset button function

$("#reset-btn").on("click", function() {
  $("input").val("");
  $(".result-value").text("$0.00");
  $("#bill-amount").removeClass("invalid");
  $("#people").removeClass("invalid");
  $(".zero-warning1").hide();
  $(".zero-warning2").hide();
});


//calculate button function

$("#cal-btn").click(function() {
  if ($("#bill-amount").val() == 0) {
    $(".zero-warning1").show();
    $("#bill-amount").addClass("invalid");
    return false;
  } else if ($("#people").val() == 0) {
    $(".zero-warning2").show();
    $("#people").addClass("invalid");
    return false;
  } else {
      $(".btn").on("click", function() {
        tipValue = this.id;});
        switch (tipValue) {
          case "5":
            tip = ((bill / people) * 5) / 100;
            break;

          case "10":
            tip = ((bill / people) * 10) / 100;
            break;

          case "15":
            tip = ((bill / people) * 15) / 100;
            break;

          case "25":
            tip = ((bill / people) * 25) / 100;
            break;

          case "50":
            tip = ((bill / people) * 50) / 100;
            break;

          case "custom":
            tip = ((bill / people) * parseFloat($("#custom").val())) / 100;
            break;
        }

      $("#tip-amount").text("$" + tip.toFixed(2));

    bill = parseFloat($("#bill-amount").val());
    people = parseFloat($("#people").val());
    var totalPerPerson = (bill / people) + tip;
    $("#total").text("$" + totalPerPerson.toFixed(2));
  }
});
