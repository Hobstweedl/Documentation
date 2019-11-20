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
