import isPossible from '.';

describe('Construct Target Array With Multiple Sums', () => {
  it('should return true for target = [9,3,5]', () => {
    const target = [9, 3, 5];
    const result = isPossible(target);
    expect(result).toBe(true);
  });

  it('should return false for target = [1,1,1,2]', () => {
    const target = [1, 1, 1, 2];
    const result = isPossible(target);
    expect(result).toBe(false);
  });

  // performance test
  it('should handle large input efficiently', () => {
    const start = performance.now();
    const result = isPossible([2, 900000001]);
    const end = performance.now();
    expect(result).toBe(true);
    expect(end - start).toBeLessThan(1000); // should complete within 1 second
  });
});
