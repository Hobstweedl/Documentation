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
