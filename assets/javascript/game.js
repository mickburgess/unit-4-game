$(document).ready(function () {
// VARIABLES

// random number to be used for each game
var randnumber = Math.floor(Math.random() * 102 + 19);

// place randnumber into the random-number div
$("#random-number").text(randnumber);

// wins
var wins = 0;

// loses
var loses = 0;

// your score
var score = 0;

$("#current-score").text(score);
var isValueSet = false;

// place randnumber into the random-number div
$("#random-number").text(randnumber);

function setGemValue () {
  var gemValue = [];
  for (i = 0; i < 4; i++) {
  var randGemValue = Math.floor(Math.random() * 12 + 1);  
  console.log("rand", randGemValue);
  gemValue.push(randGemValue);
  }
  
  // attempting to use .each to set value
  /*l = gemValue.length;

  for (i = 0; i < l; i++) {
    function setGemValue () {
    $("input:image").each(function () {
      $(this).val(gemValue[i]);
    console.log(gemValue[i]);
    });
    }
    setGemValue();
  }*/

  $("#ruby-input").val( gemValue[0]);
  $("#sapphire-input").val(gemValue[1]);
  $("#diamond-input").val(gemValue[2]);
  $("#emerald-input").val(gemValue[3]);
}
setGemValue();

});