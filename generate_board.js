/**
* A board is a 9 x 9 grid of numbers.
* TODO: check for uniqueness in each column.
*/

/**
*  Let's see if we can generate 9 rows, each with non-repeating numbers.
*  Solve that problem first, then perhaps add in the constraint that
*  the columns are also non-repeating.
*/
function makeRow() {
  var row = [];
  var nextNumber;
  var rowCounter = 0;
  while (rowCounter < 9) {
    nextNumber = Math.floor((Math.random() * 9) + 1);
    if (row.indexOf(nextNumber) < 0) {
      row[rowCounter] = nextNumber;
      rowCounter++;
    }
  }
  return row;
}

function makeBoard() {
  var newBoard = []
  var counter = 0;
  while (counter < 9) {
    newBoard = newBoard.concat(makeRow());
    counter++;
  }
  return newBoard;
}

var board = makeBoard();

for (i = 0; i < 81; i+=9) {
  console.log(board[i] + " " + board[i+1] + " " + board[i+2] + " " + board[i+3] + " " + board[i+4] + " " + board[i+5] + " " + board[i+6] + " " + board[i+7] + " " + board[i+8] );
}
