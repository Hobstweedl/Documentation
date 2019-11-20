const getAdj = (b, x, y) => {
  const [c, r] = boundaries(b);

  if (x >= r || y >= c) {
    throw 'Error';
  }
  let adj = 0;

  const coord = [
    [-1, 0],
    [-1, -1],
    [-1, 1],
    [1, 0],
    [1, -1],
    [1, 1],
    [0, -1],
    [0, 1],
  ];

  for (let i = 0; i < coord.length; i++) {
    const vertice = coord[i];
    const pX = x + vertice[1];
    const pY = y + vertice[0];

    if (pX >= 0 && pY >= 0 && pX < r && pY < c) {
      if (b[pY][pX]) {
        adj++;
      }
    }
  }
  return adj;
};



/****************************************************/
const getNumberOfNeighbors = (board, x, y) => {

  const [colLength, rowLength] = getBoundaries(board);

  if (x >= rowLength || y >= colLength) {
    throw 'Position is out of bounds!';
  }
  let neighbors = 0;

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
    const direction = coordinates[i];
    const pX = x + direction[1];
    const pY = y + direction[0];

    if (pX >= 0 && pY >= 0 && pX < rowLength && pY < colLength) {
      if (board[pY][pX]) {
        neighbors++;
      }
    }
  }
  return neighbors;
};




/**************************************************/

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

  // 8 positions of adjacency from center point to seearch
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
      // Dtermine if prime XY already exists
      if (board[pY][pX]) {
        neighbors++;
      }
    }
  }
  return neighbors;
};
