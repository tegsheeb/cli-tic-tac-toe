// UI needed in Command Line
// Board
// whose turn
// prompt to ask user input

var prompt = require('prompt');

const board = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']

const getBoard = () => {
  console.log(`
    ${board[0]} | ${board[1]} | ${board[2]}
    ----------
    ${board[3]} | ${board[4]} | ${board[5]}
    ----------
    ${board[6]} | ${board[7]} | ${board[8]}
    `
  );
}

const whoseTurn = 'X';

const getUserInput = (whoseTurn) => {
  prompt.start();

  prompt.get(['locationIndex'], function (err, result) {
    board[result.locationIndex - 1] = whoseTurn;
    getBoard();

  });
}

getUserInput(whoseTurn);


