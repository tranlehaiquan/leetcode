import { minimumDifference } from '.';

describe('Minimum Difference Between Highest and Lowest of K Scores', () => {
  test('Example 1', () => {
    const nums = [90];
    const k = 1;
    const expected = 0;
    expect(minimumDifference(nums, k)).toBe(expected);
  });

  test('Example 2', () => {
    const nums = [9, 4, 1, 7];
    const k = 2;
    const expected = 2;
    expect(minimumDifference(nums, k)).toBe(expected);
  });

  test('Example 3', () => {
    const nums = [6, 2, 5, 3, 1, 4];
    const k = 3;
    const expected = 2;
    expect(minimumDifference(nums, k)).toBe(expected);
  });
});
