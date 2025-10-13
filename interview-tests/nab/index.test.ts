import {
  countDistinctLetter,
  isValidPhoneNumber,
  maxPalindromicTriplets,
} from "./index";

describe("countDistinctLetter", () => {
  it('returns 2 for "abababa"', () => {
    expect(countDistinctLetter("abababa")).toBe(2);
  });
  it("returns 0 for string shorter than 3", () => {
    expect(countDistinctLetter("ab")).toBe(0);
  });
  it("returns 1 for string of length 3", () => {
    expect(countDistinctLetter("abc")).toBe(1);
  });
  it("returns correct count for repeated substrings", () => {
    expect(countDistinctLetter("abcabcabc")).toBe(3);
  });
  it("returns correct count for all unique substrings", () => {
    expect(countDistinctLetter("abcdef")).toBe(4);
  });
});

describe("isValidPhoneNumber", () => {
  it("returns true for valid phone number", () => {
    expect(isValidPhoneNumber("123-123-123")).toBe(true);
  });
  it("returns false for letters in phone number", () => {
    expect(isValidPhoneNumber("1a2-123-432")).toBe(false);
  });
  it("returns false for spaces in phone number", () => {
    expect(isValidPhoneNumber("123 123 123")).toBe(false);
  });
  it("returns false for too many groups", () => {
    expect(isValidPhoneNumber("123-123-123-123")).toBe(false);
  });
  it("returns false for too few groups", () => {
    expect(isValidPhoneNumber("123-123")).toBe(false);
  });
  it("returns false for group with wrong length", () => {
    expect(isValidPhoneNumber("12-123-123")).toBe(false);
    expect(isValidPhoneNumber("123-12-123")).toBe(false);
    expect(isValidPhoneNumber("123-123-12")).toBe(false);
  });
});

describe("maxPalindromicTriplets", () => {
  // Basic examples from the problem description
  it('should return 2 for "aaaabc"', () => {
    expect(maxPalindromicTriplets("aaaabc")).toBe(2);
    // Can form "aba" and "aca"
  });

  it('should return 1 for "xyvzwy"', () => {
    expect(maxPalindromicTriplets("xyvzwy")).toBe(1);
    // Can form one palindrome like "yxy" or "yvy"
  });

  it('should return 0 for "dd"', () => {
    expect(maxPalindromicTriplets("dd")).toBe(0);
    // Not enough characters to form a 3-letter palindrome
  });

  it('should return 2 for "fknfkn"', () => {
    expect(maxPalindromicTriplets("fknfkn")).toBe(2);
    // Can form "fkf" and "nkn"
  });

  // Edge cases
  it("should return 0 for empty string", () => {
    expect(maxPalindromicTriplets("")).toBe(0);
  });

  it("should return 0 for single character", () => {
    expect(maxPalindromicTriplets("a")).toBe(0);
  });

  it("should return 0 for two characters", () => {
    expect(maxPalindromicTriplets("ab")).toBe(0);
  });

  // Palindromes with same characters
  it('should return 1 for "ddd"', () => {
    expect(maxPalindromicTriplets("ddd")).toBe(1);
    // Can form "ddd"
  });

  it('should return 2 for "dddddd"', () => {
    expect(maxPalindromicTriplets("dddddd")).toBe(2);
    // Can form "ddd" twice
  });

  it('should return 3 for "aaaaaaaaaa"', () => {
    expect(maxPalindromicTriplets("aaaaaaaaaa")).toBe(3);
    // 10 'a's can form 3 palindromes: "aaa", "aaa", "aaa"
  });

  // More complex cases
  it("should handle mixed characters with multiple pairs", () => {
    expect(maxPalindromicTriplets("aabbcc")).toBe(2);
    // Can form "aba" and "cbc" or similar combinations
  });

  it("should handle case where pairs exceed available middle characters", () => {
    expect(maxPalindromicTriplets("aabb")).toBe(1);
    // Have 2 pairs but only 4 total characters, so max 1 palindrome
  });

  it("should handle alternating pattern", () => {
    expect(maxPalindromicTriplets("abababab")).toBe(2);
    // 4 'a's and 4 'b's, can form 2 palindromes
  });

  it("should handle three of each character", () => {
    expect(maxPalindromicTriplets("aaabbb")).toBe(2);
    // Can form "aba" and "bab"
  });

  it("should handle minimum case for palindrome formation", () => {
    expect(maxPalindromicTriplets("abc")).toBe(0);
    // No pairs available, cannot form palindromes
  });
});
