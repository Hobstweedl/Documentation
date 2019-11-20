/**
 * returns the boundaries of the board
 * @param  {array} board
 * @return {array}       return array containing column, row length
 */
const getBoundaries = board => [board.length, board[0].length];

/**
 * create a blank 2d array with specified dimensions
 * @param  {number} rows    row length of board
 * @param  {rows} cols      column length of board
 * @return {array} board    the finished 2d board
 */
const makeBoard = (rows, cols) => {
  const board = [];

  //  Do this with reverse x, y because x is length, y is height normally
  for (let y = 0; y < cols; y++) {
    board[y] = [];
    for (let x = 0; x < rows; x++) {
      board[y][x] = 0;
    }
  }

  // reference as board[y][x] for positioning
  return board;
};

/**
 * Search a position for the number of neighbors it has
 * @param  {array} board - the board array
 * @param  {number} x     x-axis position
 * @param  {number} y     y-axis position
 * @return {number}       count of neighbors adjacent to position
 */
const getNumberOfNeighbors = (board, x, y) => {
  //  This is sort of dumb to recall the boundaries of the board on every search
  //  Would probably be better to pass the boundaries in during simulation
  const [colLength, rowLength] = getBoundaries(board);

  if (x >= rowLength || y >= colLength) {
    throw 'Position is out of bounds!';
  }
  let neighbors = 0;

  // 8 positions of adjaceny from center point
  const coordinates = [
    [-1, 0],
    [-1, -1],
    [-1, 1],
    [1, 0],
    [1, -1],
    [1, 1],
    [0, -1],
    [0, 1],
  ];

  for (let i = 0; i < coordinates.length; i++) {
    //  poke around the point
    const direction = coordinates[i];
    const pX = x + direction[1];
    const pY = y + direction[0];

    //  Check that we are within boundaries and count neighbors
    if (pX >= 0 && pY >= 0 && pX < rowLength && pY < colLength) {
      if (board[pY][pX]) {
        neighbors++;
      }
    }
  }
  return neighbors;
};

/**
 * Run the simulation with the rules for the game of life!
 * @param  {array} oldBoard       the current generation of the board to simulate
 * @return {array} updatedBoard   the new generation of the board
 */
const simulate = oldBoard => {
  const [colLength, rowLength] = getBoundaries(oldBoard);
  const updatedBoard = makeBoard(rowLength, colLength);

  for (let y = 0; y < colLength; y++) {
    for (let x = 0; x < rowLength; x++) {
      const neighbors = getNumberOfNeighbors(oldBoard, x, y);

      /*
        Any live cell with fewer than two live neighbours dies, as if by underpopulation.
        Any live cell with two or three live neighbours lives on to the next generation.
        Any live cell with more than three live neighbours dies, as if by overpopulation.
        Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.
      */
      if (oldBoard[y][x]) {
        if (neighbors === 2 || neighbors === 3) {
          updatedBoard[y][x] = 1;
        } else {
          updatedBoard[y][x] = 0;
        }
      } else if (neighbors === 3) {
        updatedBoard[y][x] = 1;
      }
    }
  }

  return updatedBoard;
};

module.exports = {
  makeBoard,
  getNumberOfNeighbors,
  simulate,
};
