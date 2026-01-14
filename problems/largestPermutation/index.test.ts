import { largestPermutation, largestPermutationFirst } from '.';

describe('largestPermutation', () => {
  it('should return [2, 1, 3] when arr = [3, 1, 2] and k = 2', () => {
    expect(largestPermutation([3, 1, 2], 2)).toEqual([3, 2, 1]);
    expect(largestPermutationFirst([3, 1, 2], 2)).toEqual([3, 2, 1]);
  });
});
