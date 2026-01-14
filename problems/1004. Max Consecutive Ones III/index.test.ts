import { longestOnes } from './index';

describe('1004. Max Consecutive Ones III', () => {
  it('should return 10 when k=3 and array is [1,1,1,0,0,0,1,1,1,1,0]', () => {
    expect(longestOnes([1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], 3)).toBe(10);
  });

  it('should return 6 when k=2 and array is [1,1,1,0,0,0,1,1,1,1,0]', () => {
    expect(longestOnes([1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], 2)).toBe(6);
  });

  it('should return 10 when k=3 and array is [0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1]', () => {
    expect(
      longestOnes([0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1], 3),
    ).toBe(10);
  });
});
