import solution from './index';

describe('Count Unique Numbers After Rotations', () => {
  it('should return correct count for simple right rotation by 1', () => {
    // "123" -> "312" -> "231" -> "123" (stop)
    expect(solution('123', 1)).toBe(3);
  });

  it('should return 1 when b is equal to length', () => {
    expect(solution('12345', 5)).toBe(1);
  });

  it('should return 1 when b is multiple of length (effectively)', () => {
      // Logic handles slice(-b). slice(-10) on len 5 string takes whole string.
      // "12345".slice(-10) -> "12345". slice(0, -10) -> "". Result "12345".
      // Wait, slice behavior with negative index larger than length?
      // "abc".slice(-5) is "abc". "abc".slice(0, -5) is "".
      // So effectively rotation by length.
    expect(solution('12345', 10)).toBe(1);
  });

  it('should handle repeating patterns with partial rotation', () => {
    // "1212", b=2 -> "12" + "12" = "1212". Size 1.
    expect(solution('1212', 2)).toBe(1);
  });

  it('should handle partial cycles', () => {
    // "1234", b=2
    // Start "1234"
    // "3412"
    // "1234" -> stop
    expect(solution('1234', 2)).toBe(2);
  });
  
  it('should return 0 for empty string or b=0', () => {
      expect(solution('', 5)).toBe(0);
      expect(solution('abc', 0)).toBe(0);
  });
});
