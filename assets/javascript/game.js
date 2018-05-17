// Another change to a file
// VARIABLES

// wins
var wins = 0;
$("#wins").text("Wins: " + wins);

// losses
var losses = 0;
$("#losses").text("Losses: " + losses);
// your score
var score = 0;



// Used for intial score at the start of games
function initialScore () {
  score = 0;
  $("#current-score").text(score);
}
initialScore();

// Used for setting the number to aim for at the start of games
function randomnumber () {
  // random number to be used for each game
  var randnumber = Math.floor(Math.random() * 102 + 19);
  // place randnumber into the random-number div
  $("#random-number").text(randnumber);
}
randomnumber();

function setGemValue () {
  var gemValue = [];
  for (i = 0; i < 4; i++) {
  var randGemValue = Math.floor(Math.random() * 12 + 1);  
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

$("input").click(function() {
  var gemScore = ($(this).val());
  gemScore = parseInt(gemScore);

  score += gemScore;
  $("#current-score").text(score);

  if (score === randnumber) {
    wins++;
    $("#wins").text("Wins: " + wins);
    setGemValue();
    randomnumber();
    initialScore();
  }
  else if (score < randnumber) {
    return false;
  }
  else { 
    losses++;
    $("#losses").text("Losses: " + losses);
    setGemValue();
    randomnumber();
    initialScore();
  }
  
});

  
