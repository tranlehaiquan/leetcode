import lengthOfLongestSubstring from './index';

describe('lengthOfLongestSubstring', () => {
  it("should return 3 when s = 'abcabcbb'", () => {
    expect(lengthOfLongestSubstring("abcabcbb")).toEqual(3);
  });
  it("should return 1 when s = 'bbbbb'", () => {
    expect(lengthOfLongestSubstring("bbbbb")).toEqual(1);
  });
  it("should return 3 when s = 'pwwkew'", () => {
    expect(lengthOfLongestSubstring("pwwkew")).toEqual(3);
  });
  it("should return 2 when s = 'aab'", () => {
    expect(lengthOfLongestSubstring("aab")).toEqual(2);
  });
  it("should return 6 when s = 'bbtablud'", () => {
    expect(lengthOfLongestSubstring("bbtablud")).toEqual(6);
  });
});