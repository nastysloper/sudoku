/**
* A board will be an array of 81 elements.
*
*
*/
var board = [];

console.log("running");

for (i = 0; i < 81; i++) {
  board[i] = Math.floor(Math.random(0,9) * 10);
}

for (i = 0; i < 81; i+=9) {
  console.log(board[i] + " " + board[i+1] + " " + board[i+2] + " " + board[i+3] + " " + board[i+4] + " " + board[i+5] + " " + board[i+6] + " " + board[i+7] + " " + board[i+8] );
}