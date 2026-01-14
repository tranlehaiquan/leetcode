import kSmallestPairs from '.';
import { expect, test, describe } from 'bun:test';

describe('kSmallestPairs', () => {
  test('Input: nums1 = [1,7,11], nums2 = [2,4,6], k = 3', () => {
    const result = kSmallestPairs([1, 7, 11], [2, 4, 6], 3);
    expect(result).toEqual([
      [1, 2],
      [1, 4],
      [1, 6],
    ]);
  });
});
