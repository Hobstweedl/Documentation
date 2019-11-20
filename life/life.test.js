const { boardBuilder, getNumberOfNeighbors, simulate } = require('./life.functions');

describe('Board Builder Helper', () => {
  it('should create a standard 10x10 board', () => {
    const testBoard = boardBuilder(10, 10);
    expect(testBoard.length).toBe(10);
    expect(testBoard[0].length).toBe(10);
  });

  it('should create a board with 8 rows and 10 columns', () => {
    const testBoard = boardBuilder(10, 8);
    expect(testBoard.length).toBe(8);
    expect(testBoard[0].length).toBe(10);
  });
});

describe('Get Number of Neighbors Helper', () => {
  it('should calculate the neighbors of a point', () => {
    const board = boardBuilder(10, 10);
    board[2][1] = 1;
    board[2][2] = 1;
    board[2][3] = 1;
    /*
    0 0 0 0 0 0 0 0 0 0
    0 0 0 0 0 0 0 0 0 0
    0 1 1 1 0 0 0 0 0 0
    0 0 0 0 0 0 0 0 0 0
    0 0 0 0 0 0 0 0 0 0
    0 0 0 0 0 0 0 0 0 0
    0 0 0 0 0 0 0 0 0 0
    0 0 0 0 0 0 0 0 0 0
    0 0 0 0 0 0 0 0 0 0
    0 0 0 0 0 0 0 0 0 0
     */
    expect(getNumberOfNeighbors(board, 2, 2)).toBe(2); // center point
    expect(getNumberOfNeighbors(board, 2, 1)).toBe(3); // above center point
    expect(getNumberOfNeighbors(board, 1, 1)).toBe(2); // above left point
    expect(getNumberOfNeighbors(board, 4, 2)).toBe(1); // right of right pint
    expect(getNumberOfNeighbors(board, 4, 4)).toBe(0); // bottom right away from everything else
  });

  it('should throw an error if you pick a point outside of the board boundaries', () => {
    const board = boardBuilder(10, 10);
    expect(() => {
      getNumberOfNeighbors(board, 11, 11);
    }).toThrow();
  });

  it('should calculate neighbors at board boundaries', () => {
    const board = boardBuilder(10, 10);
    board[9][9] = 1;
    board[8][9] = 1;

    expect(getNumberOfNeighbors(board, 9, 9)).toBe(1);
    expect(getNumberOfNeighbors(board, 9, 7)).toBe(1);

    expect(() => {
      getNumberOfNeighbors(board, 9, 10);
    }).toThrow();
  });
});

describe('Simulate Helper', () => {
  let board;
  beforeEach(() => {
    board = boardBuilder(10, 10);
    board[2][1] = 1;
    board[2][2] = 1;
    board[2][3] = 1;
  });

  it('should create a rotation with one generation shift', () => {
    const newBoard = simulate(board);
    expect(newBoard[2][2]).toBe(1);

    expect(newBoard[1][2]).toBe(1);
    expect(newBoard[3][2]).toBe(1);

    expect(newBoard[2][1]).toBe(0);
    expect(newBoard[2][3]).toBe(0);
  });

  it('should create a rotation with two generation shifts', () => {
    const newBoard = simulate(simulate(board));
    expect(newBoard[2][2]).toBe(1);

    expect(newBoard[1][2]).toBe(0);
    expect(newBoard[3][2]).toBe(0);

    expect(newBoard[2][1]).toBe(1);
    expect(newBoard[2][3]).toBe(1);
  });

  it('should create a rotation at edge of board and die after 2 generation shifts', () => {
    //  Wipe the pre-made board for special edge case
    board = boardBuilder(10, 10);
    board[7][9] = 1;
    board[8][9] = 1;
    board[9][9] = 1;

    const newBoard = simulate(board);

    expect(newBoard[8][9]).toBe(1);
    expect(newBoard[9][9]).toBe(0);
    expect(newBoard[7][9]).toBe(0);

    // new point created
    expect(newBoard[8][8]).toBe(1);

    const finalBoard = simulate(newBoard); // could also simulate(simulate(board))

    for (let y = 0; y < 10; y++) {
      for (let x = 0; x < 10; x++) {
        expect(finalBoard[y][x]).toBe(0);
      }
    }
  });

  it('should create a glider that moves through generations', () => {
    // This is a bit long, but a nice test case to bulletproof yourself
    board = boardBuilder(10, 10);
    board[2][0] = 1;
    board[2][1] = 1;
    board[2][2] = 1;
    board[0][1] = 1;
    board[1][2] = 1;

    const newBoard = simulate(board);
    expect(newBoard[0]).toEqual([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    expect(newBoard[1]).toEqual([1, 0, 1, 0, 0, 0, 0, 0, 0, 0]);
    expect(newBoard[2]).toEqual([0, 1, 1, 0, 0, 0, 0, 0, 0, 0]);
    expect(newBoard[3]).toEqual([0, 1, 0, 0, 0, 0, 0, 0, 0, 0]);

    const finalBoard = simulate(newBoard);
    expect(finalBoard[0]).toEqual([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    expect(finalBoard[1]).toEqual([0, 0, 1, 0, 0, 0, 0, 0, 0, 0]);
    expect(finalBoard[2]).toEqual([1, 0, 1, 0, 0, 0, 0, 0, 0, 0]);
    expect(finalBoard[3]).toEqual([0, 1, 1, 0, 0, 0, 0, 0, 0, 0]);
  });
});
