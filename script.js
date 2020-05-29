// ENTER BILL amount and output under the TOTAL at the same time the user enters a value
$("#htmlinput").on("input",function(){
    $("#target").html($(this).val());
  });

 var tipPercent = document.querySelector('.tipInput');
 var theBill = document.getElementById('htmlinput');

var totalBill = parseInt(tipPercent) * parseInt(theBill);
console.log(totalBill);

document.getElementById('dollarAmount').innerHTML = totalBill;