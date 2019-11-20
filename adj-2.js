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
