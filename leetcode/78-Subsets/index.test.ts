import subsets from './index';

describe('78. Subsets', () => {
  const sortSubsets = (subsets: number[][]) => {
    return subsets
      .map((s) => s.sort((a, b) => a - b))
      .sort((a, b) => {
        if (a.length !== b.length) return a.length - b.length;
        for (let i = 0; i < a.length; i++) {
          if (a[i] !== b[i]) return a[i] - b[i];
        }
        return 0;
      });
  };

  it('should return all subsets for [1, 2, 3]', () => {
    const nums = [1, 2, 3];
    const result = subsets(nums);
    const expected = [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]];

    expect(sortSubsets(result)).toEqual(sortSubsets(expected));
  });

  it('should return all subsets for [0]', () => {
    const nums = [0];
    const result = subsets(nums);
    const expected = [[], [0]];

    expect(sortSubsets(result)).toEqual(sortSubsets(expected));
  });
});
