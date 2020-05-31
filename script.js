// ENTER BILL amount and output under the TOTAL at the same time the user enters a value
$("#htmlinput").on("input",function(){
    $("#target").html($(this).val());
  });

 // This gets the Tip Percentage the User enters 
var totalBill = parseInt(tipAmount ) * parseInt(theBill);
 var tipAmount = document.getElementById('tipInput').value;


 // This gets the dollar amount entered
 var theBill = document.getElementById('htmlinput').value;

 var tipPercentage = document.getElementById('dollarAmount').value;

 console.log(tipPercentage);
 console.log(theBill);

 
// This Outputs the actual Tip Amount in Dollars Only
var totalBill = parseFloat(tipAmount * .01) * parseFloat(theBill);
console.log(totalBill);

document.getElementById('dollarAmount').value = totalBill;

// var myNewTip = document.getElementById('dollarAmount').value = totalBill;

// myNewTip.document.getElementById('dollarAmount').value = totalBill;

// $("#tipInput").on("input",function(){
//     $("#dollarAmount").html($(this).val());
//   });


