/**
 * Search an xy position for the number of neighbors it has
 * @param  {array} board - the board array
 * @param  {number} x     x-axis position
 * @param  {number} y     y-axis position
 * @return {number}       count of neighbors adjacent to position
 */
const getNumberOfNeighbors = (board, x, y) => {
  //  This is inefficient to recall the boundaries of the board on every search
  //  @TODO pass the boundaries in during simulation
  const [colLength, rowLength] = getBoundaries(board);

  if (x >= rowLength || y >= colLength) {
    throw 'Position passed is out of bounds!';
  }
  let neighbors = 0;

  // 8 positions of adjacency from center point to search
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

  //  Loop through each adjacent position to xy and check to see if a non-zero value is in the current board
  for (let i = 0; i < coordinates.length; i++) {
    const direction = coordinates[i];

    //  poke around the point, create a prime XY coordinate to check against our current board for neighbor
    const pX = x + direction[1];
    const pY = y + direction[0];

    //  Check that we are within boundaries
    if (pX >= 0 && pY >= 0 && pX < rowLength && pY < colLength) {
      // Determine if prime XY already exists
      if (board[pY][pX]) {
        neighbors++;
      }
    }
  }
  return neighbors;
};
