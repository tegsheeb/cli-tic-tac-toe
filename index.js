// UI needed in Command Line
// - Board
// - whose turn
// - prompt to ask user input

var prompt = require('prompt');

const board = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']
let whoseTurn = 'X'; // game start with X's turn

const getBoard = () => {
  console.log(`
    ${board[0]} | ${board[1]} | ${board[2]}
    ----------
    ${board[3]} | ${board[4]} | ${board[5]}
    ----------
    ${board[6]} | ${board[7]} | ${board[8]}

    It is ${whoseTurn}'s turn. Plesae choose the locationd index.
    `
  );
}

const toggleTurn = () => {
  whoseTurn = whoseTurn === 'X' ? 'O' : 'X';
}

const getUserInput = (whoseTurn) => {
  prompt.start();

  prompt.get(['locationIndex'], function (err, result) {
    board[result.locationIndex - 1] = whoseTurn;
    getBoard();
    toggleTurn();
  });
}

getUserInput(whoseTurn);


