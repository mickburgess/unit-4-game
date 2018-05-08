// VARIABLES

// random number to be used for each game
var randnumber = Math.floor(Math.random() * 102 + 19);

// wins
var wins = 0;

// loses
var loses = 0;

// your score
var score = 0;

var isValueSet = false;



var gemValue = [];
for (i=0; i<4; i++) {
var randGemValue = Math.floor(Math.random() * 12 + 1);  
gemValue.push(randGemValue);
}
console.log(gemValue);
// place randnumber into the random-number div
$("#random-number").text(randnumber);

// function for giving gems random values
function setGemValue () {

}

/*$(".gems").click(function () {
  
  $(this).attr("value", gemValue);
});*/ 