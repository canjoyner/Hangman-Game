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


console.log(wins);
console.log(wordBank)

//click a key to begin

 document.onkeyup = function(){
console.log(current)
//picks a word from the list and converts it to dashes
    var chosenWord  = wordBank[numRand];
    console.log(chosenWord)
  
      for (var i=0; i < chosenWord.length; i++) {
     storeTemp[i] = "-";   

          if (chosenWord.charAt(i) === " "){


     	storeTemp[i] = " ";}
     	current[i] = storeTemp[i];
     	gameTime.innerHTML = current;
     
 }
}
console.log(storeTemp)
console.log(current)
console.log(chosenWord)
// gathers key strokes. Code should have a loop to prevent users from guessing the same word twice
  onkeyup = function (event){ 

 {
    guess = event.key;
    storeGuess.push(guess);

   console.log(storeGuess)
 attemps.innerHTML = storeGuess;
 }
}

//this code should substitue the guess letter for the correct dash in the string
//
for (var j=0; j<chosenWord.length; j++){
  if (chosenWord.charAt(j) != guess){
  display += current[j];}
   else {
   display += chosenWord[j];
   }   
  console.log(choseWord + current);
  console.log(j)

guesses.innerHTML = storeGuess;
  
 

};

   







 