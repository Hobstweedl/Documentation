const run = prev => {
  const [c, r] = getBound(prev);
  const next = make(r, c);

  for (let y = 0; y < c; y++) {
    for (let x = 0; x < r; x++) {
      const adj = getAdj(prev, x, y);
      if (prev[y][x]) {
        if (adj === 2 || adj === 3) {
          next[y][x] = 1;
        } else {
          next[y][x] = 0;
        }
      } else if (adj === 3) {
        next[y][x] = 1;
      }
    }
  }

  return next;
};
