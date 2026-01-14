import solution from '.';

describe('countDaysCompleted', () => {
  it('should return 3', () => {
    expect(solution([5, 8, 2, 7], 3)).toBe(3);
  });
  it('should return 3', () => {
    expect(solution([2, 5, 9, 2, 1, 4], 4)).toBe(3);
  });
  it('should return 4', () => {
    expect(solution([1, 12, 10, 4, 5, 2], 2)).toBe(4);
  });
});
