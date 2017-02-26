/**
* A board will be an array of 81 elements.
*
*
*/

var board = [];

var numbersInRow = [];
var numbersInColumn = [];
var numbersInGrid = [];

function makeRow() {
  var row = [];
  var nextNumber;
  var counter = 0;
  while (counter < 9) {
    nextNumber = Math.floor(Math.random(0,9) * 10);
    if (row.indexOf(nextNumber) < 0) {
      row[counter] = nextNumber;
      counter++;
    }

  }
  return row;
}

for (i = 0; i < 81; i++) {
  board[i] = Math.floor(Math.random(0,9) * 10);
}

for (i = 0; i < 81; i+=9) {
  console.log(board[i] + " " + board[i+1] + " " + board[i+2] + " " + board[i+3] + " " + board[i+4] + " " + board[i+5] + " " + board[i+6] + " " + board[i+7] + " " + board[i+8] );
}

console.log("row is " + makeRow());