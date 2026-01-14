import trap from './index';

describe('42. Trapping Rain Water', () => {
  it('example 1', () => {
    const heights = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
    const result = trap(heights);
    expect(result).toBe(6);
  });

  it('example 2', () => {
    const heights = [4, 2, 0, 3, 2, 5];
    const result = trap(heights);
    expect(result).toBe(9);
  });

  it('edge case: empty array', () => {
    const heights: number[] = [];
    const result = trap(heights);
    expect(result).toBe(0);
  });
});
