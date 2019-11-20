const simulate = oldBoard => {
  const [colLength, rowLength] = getBoundaries(oldBoard);
  const updatedBoard = makeBoard(rowLength, colLength);

  for (let y = 0; y < colLength; y++) {
    for (let x = 0; x < rowLength; x++) {
      const neighbors = getNumberOfNeighbors(oldBoard, x, y);
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
