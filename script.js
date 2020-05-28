
// function calculateBill() {
//    document.addEventListener("click", function() {
//     var mybill = document.getElementById("bill").value;
//     document.querySelector('.totalTip').innerHTML = mybill;
// })
// }


$("#htmlinput").on("input",function(){
    $("#target").html($(this).val());
  });