const make = (r, c) => {
  const matrix = [];
  for (let y = 0; y < c; y++) {
    matrix[y] = [];
    for (let x = 0; x < r; x++) {
      board[y][x] = 0;
    }
  }
  return matrix;
};

/*---------------------------------*/
const makeBoard = (rows, cols) => {
  const board = [];

  for (let y = 0; y < cols; y++) {
    board[y] = [];
    for (let x = 0; x < rows; x++) {
      board[y][x] = 0;
    }
  }

  return board;
};

/*-----------------------------------------*/

/**
 * create a  2d array with specified dimensions
 * @param  {number} rows    row length of board
 * @param  {rows} cols      column length of board
 * @return {array} board    the created 2d board
 */
const makeBoard = (rows, cols) => {
  const board = [];

  //  Do this with reverse x, y
  //  x is length, y is height logically, inversed for matrices
  for (let y = 0; y < cols; y++) {
    // assign an empty array for each board "column" to be filled after looping through rows
    board[y] = [];
    for (let x = 0; x < rows; x++) {
      board[y][x] = 0;
    }
  }

  // reference as board[y][x] for positioning
  return board;
};
