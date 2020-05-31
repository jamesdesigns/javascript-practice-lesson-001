// ENTER BILL amount and output under the TOTAL at the same time the user enters a value
$("#htmlinput").on("input",function(){
    $("#target").html($(this).val());
  });

 // This gets the Tip Percentage the User enters 
 var tipAmount = document.getElementById('tipInput').value;

 // This gets the dollar amount entered
 var theBill = document.getElementById('htmlinput').value;

 // This assigns the Tip Percentage the use entered as a Tip %
 var tipPercentage = document.getElementById('tipInput').value;
 

 console.log(tipPercentage);
 console.log(theBill);

 
// This Outputs the actual Dollar Tip Amount in Dollars Only
var totalTip = parseFloat(tipAmount * .01) * parseFloat(theBill);
console.log(totalTip);

document.getElementById('dollarAmount').value = totalTip;
document.getElementById('target').innerHTML = totalTip + parseFloat(theBill);

var addTipDollar = parseFloat(totalTip) + parseFloat(theBill);
console.log(addTipDollar);


document.getElementById('dollar').value = addTipDollar;

