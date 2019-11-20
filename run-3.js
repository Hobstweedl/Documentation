/**
 * Run the simulation with the rules for the game of life!
 * @param  {array} oldBoard       the current generation of the board to simulate
 * @return {array} nextGeneration   the new generation of the board
 */
const simulate = oldBoard => {
  /*
    Rules:

    Any live cell with fewer than two live neighbors dies, as if by underpopulation.
    Any live cell with two or three live neighbors lives on to the next generation.
    Any live cell with more than three live neighbors dies, as if by overpopulation.
    Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.
  */

  const [colLength, rowLength] = getBoundaries(oldBoard);
  const nextGeneration = makeBoard(rowLength, colLength);

  //  Loop through each position on the board
  //  Check for neighbrs
  //  update next generation of the board with new value
  for (let y = 0; y < colLength; y++) {
    for (let x = 0; x < rowLength; x++) {
      const neighbors = getNumberOfNeighbors(oldBoard, x, y);

      //  Check the current board's position and check for 2 or 3 neighbors
      if (oldBoard[y][x]) {
        if (neighbors === 2 || neighbors === 3) {
          nextGeneration[y][x] = 1;
        } else {
          nextGeneration[y][x] = 0;
        }
      //  This would be a dead cell, check if a new cell is created
      } else if (neighbors === 3) {
        nextGeneration[y][x] = 1;
      }
    }
  }

  return nextGeneration;
};
