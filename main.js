var minNum = 1;
var maxNum = 100;
var randNum = getRand();

function disableBtn(button) {
  document.getElementById(button).disabled = true;
}

function enableBtn(button) {
  document.getElementById(button).disabled = false;
}

function aClear(){
  document.getElementById('guessInput').value = '';
}

function aReset() {
  location.reload();
}

function rangeMethod(){
  minNum = parseInt(document.getElementById('minRange').value) || minNum;
  maxNum = parseInt(document.getElementById('maxRange').value) || maxNum;
  randNum = getRand();
  currentRange.innerHTML = ( 'Current range: ' + minNum + ' - ' + maxNum );
}

function guessMethod(){
  let guess = parseInt(document.getElementById('guessInput').value);
  currentRange.innerHTML = ( 'Current range: ' + minNum + ' - ' + maxNum );
  lastGuess.innerHTML = guess;
  enableBtn("resetBtn"); enableBtn("clearBtn");
  let feedback = guessResult(guess, randNum);
  result.innerHTML = feedback;
}

function guessResult(guess, winner) {
  if ( guess === winner ) { return 'BOOM!'; }
  else if ( guess > winner ){ return 'That is too high'; }
  else if ( guess < winner ){ return 'That is too low'; }
  else { return 'Invalid entry'; }
}

function getRand() {
  return parseInt(Math.random() * ( maxNum - minNum ) + minNum );
}

function rangeCheck(input) {
  let checkVal = parseInt(input.value)
  if ( checkVal < minNum ) { lastNote.innerHTML = 'INPUT TOO LOW'; }
  else if (checkVal > maxNum ) { lastNote.innerHTML = 'INPUT TOO HIGH'; }
  else { lastNote.innerHTML = 'Good guess'; }
}
