import lengthOfLongestSubstring from '.';

describe('lengthOfLongestSubstring', () => {
  it('test case abcabcbb', () => {
    const result = lengthOfLongestSubstring('abcabcbb');
    expect(result).toBe(3);
  });
  it('test case bbbbb', () => {
    expect(lengthOfLongestSubstring('abcabcbb')).toBe(1);
  });
  it('test case pwwkew', () => {
    expect(lengthOfLongestSubstring('pwwkew')).toBe(3);
  });
});
