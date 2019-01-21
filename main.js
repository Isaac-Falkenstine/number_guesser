// Set vars
var minNum = 1;
var maxNum = 100;
var randNum = getRand();

//sets the button it recives and disables it
function disableBtn(button) {
  document.getElementById(button).disabled = true;
}

//sets the button it recives and enables it
function enableBtn(button) {
  document.getElementById(button).disabled = false;
}

//this clears the input for a guess
function aClear(){
  document.getElementById('guessInput').value = '';
}

//this resets the page
function aReset() {
  location.reload();
}

//changes the range
function rangeMethod(){
  minNum = parseInt(document.getElementById('minRange').value) || minNum;
  maxNum = parseInt(document.getElementById('maxRange').value) || maxNum;
  //calls the getRand method to make a new random number
  randNum = getRand();
  //prints the new range on the page
  currentRange.innerHTML = ( 'Current range: ' + minNum + ' - ' + maxNum );
}

//recives a users guess
function guessMethod(){
  //gets the guess and parses it as a int
  let guess = parseInt(document.getElementById('guessInput').value);
  //sets the current range and prints it if it was changed
  currentRange.innerHTML = ( 'Current range: ' + minNum + ' - ' + maxNum );
  //prints the users guess
  lastGuess.innerHTML = guess;
  //lets the user to clear their guess or restart the session
  enableBtn("resetBtn"); enableBtn("clearBtn");
  //calls to evaluate the guess and report result
  let feedback = guessResult(guess, randNum);
  result.innerHTML = feedback;
}

//helper method to check guesses vs the correct number
function guessResult(guess, winner) {
  //checks if input is correct or too low or too high
  if ( guess === winner ) { return 'BOOM!'; }
  else if ( guess > winner ){ return 'That is too high'; }
  else if ( guess < winner ){ return 'That is too low'; }
  else { return 'Invalid entry'; }
}

//this gets the random number in the range that is set
function getRand() {
  return parseInt(Math.random() * ( maxNum - minNum ) + minNum );
}

//checks if the inputed number is too low or too high
function rangeCheck(input) {
  //gets the input and makes it a int
  let checkVal = parseInt(input.value)
  //checks if the input is either too low or too high
  if ( checkVal < minNum ) { lastNote.innerHTML = 'INPUT TOO LOW'; }
  else if (checkVal > maxNum ) { lastNote.innerHTML = 'INPUT TOO HIGH'; }
  else { lastNote.innerHTML = 'Good guess'; }
}
