import searchMatrix from '.';

describe('Search a 2D Matrix', () => {
  it('example 1', () => {
    const matrix = [
      [1, 3, 5, 7],
      [10, 11, 16, 20],
      [23, 30, 34, 60],
    ];
    const target = 3;
    const result = searchMatrix(matrix, target);
    expect(result).toBe(true);
  });

  it('example 2', () => {
    const matrix = [
      [1, 3, 5, 7],
      [10, 11, 16, 20],
      [23, 30, 34, 60],
    ];
    const target = 13;
    const result = searchMatrix(matrix, target);
    expect(result).toBe(false);
  });

  // performance test case
  it('performance test case', () => {
    const matrix = Array.from({ length: 100 }, (_, i) =>
      Array.from({ length: 100 }, (_, j) => i * 100 + j + 1),
    );
    const target = 9999;
    const result = searchMatrix(matrix, target);
    expect(result).toBe(true);
  });
});
