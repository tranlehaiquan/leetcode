import lengthOfLongestSubstring from '.';

describe('lengthOfLongestSubstring', () => {
  it('test case abcabcbb', () => {
    const result = lengthOfLongestSubstring('abcabcbb');
    expect(result).toBe(3);
  });
  it('test case bbbbb', () => {
    expect(lengthOfLongestSubstring('bbbbb')).toBe(1);
  });
  it('test case pwwkew', () => {
    expect(lengthOfLongestSubstring('pwwkew')).toBe(3);
  });

  it('performance test with large input', () => {
    const largeInput = 'a'.repeat(1000000);
    const start = performance.now();
    const result = lengthOfLongestSubstring(largeInput);
    const end = performance.now();
    expect(result).toBe(1);
    expect(end - start).toBeLessThan(200);
  });

  it('performance test with many unique characters', () => {
    const charSet =
      'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    const largeInput = charSet.repeat(20000); // ~1.2M characters
    const start = performance.now();
    const result = lengthOfLongestSubstring(largeInput);
    const end = performance.now();
    expect(result).toBe(charSet.length);
    expect(end - start).toBeLessThan(200);
  });
});
