import { findMin } from '.';

describe('153. Find Minimum in Rotated Sorted Array', () => {
  test('Example 1', () => {
    const nums = [3, 4, 5, 1, 2];
    const expected = 1;
    expect(findMin(nums)).toBe(expected);
  });

  test('Example 2', () => {
    const nums = [4, 5, 6, 7, 0, 1, 2];
    const expected = 0;
    expect(findMin(nums)).toBe(expected);
  });

  test('Example 3', () => {
    const nums = [11, 13, 15, 17];
    const expected = 11;
    expect(findMin(nums)).toBe(expected);
  });

  test('Single element array', () => {
    const nums = [1];
    const expected = 1;
    expect(findMin(nums)).toBe(expected);
  });

  test('[4,5,6,1,2,3]', () => {
    const nums = [4, 5, 6, 1, 2, 3];
    const expected = 1;
    expect(findMin(nums)).toBe(expected);
  });

  test('[4,5,0,1,2,3]', () => {
    const nums = [4, 5, 0, 1, 2, 3];
    const expected = 0;
    expect(findMin(nums)).toBe(expected);
  });
});
