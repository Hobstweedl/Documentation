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
