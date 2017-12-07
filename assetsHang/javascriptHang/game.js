 // List of words the game will rotate between for the user to guess
var wordBank = ["The Matrix" ,"Lord of the Rings", "The Dark Crystal"];
var gameTime = document.getElementById("newGame");
var greeting = document.getElementById("welcome");
var attemps = document.getElementById("guesses");	

var numRand = Math.floor(Math.random() * wordBank.length);
var wins = 0;  //not funtioning
var current = [];
var storeTemp =[];
var guess =[];
var storeGuess = [];
var chosenWord = [];
var display = [];
var test = "r";

console.log(wins);
console.log(wordBank)

//click a key to begin

 document.onkeyup = function(){}
console.log(current)
//picks a word from the list and converts it to dashes
    var chosenWord  = wordBank[numRand];
    console.log(chosenWord)
  console.log("test")
      for (var i=0; i < chosenWord.length; i++) {
     storeTemp[i] = "-";   

          if (chosenWord.charAt(i) === " "){


     	storeTemp[i] = " ";}
     	current[i] = storeTemp[i];
     	gameTime.innerHTML = current;
     
 }

console.log(storeTemp)
console.log(current)
console.log(chosenWord)
// gathers key strokes. Code should have a loop to prevent users from guessing the same word twice
  onkeyup = function (event){ 


 {
    guess = event.key;
    storeGuess.push(guess);

   
	for (var j=0; j < chosenWord.length; j++){
  if (chosenWord.charAt(j) != test) {

  	// the  += notation here is adding to the entire string instead of 
  	// keeping the string a set length
  display += current[j];}
   else {
   display += chosenWord[j];
   }   
  
  console.log(display)

attemps.innerHTML = storeGuess;
gameTime.innerHTML = display;


  


};
}
   
// there are several things missing from this code
//it doesn't keep score
	// code should limit the number of guesses
	//and keep track of how many successful games you completed
// it doen't give a cool interaction once you guess the word



}


 