const { makeBoard, simulate } = require('./life.functions');

//   Quick wrapper to run the generation a set # of times
const init = (initBoard, iterations) => {
  let b = initBoard;
  for (let i = 0; i < iterations; i++) {
    b = simulate(b);
  }

  console.log('Final Position');
  console.log(b);
};

//Scaffolding code to run in terminal
const board = makeBoard(10, 10);
board[2][0] = 1;
board[2][1] = 1;
board[2][2] = 1;
board[0][1] = 1;
board[1][2] = 1;

console.log('Initial Position');
console.log(board);
console.log();
init(board, 5);
