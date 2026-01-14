import {
  countDistinctLetter,
  isValidPhoneNumber,
  maxPalindromicTriplets,
} from './index';

describe('countDistinctLetter', () => {
  it('returns 2 for "abababa"', () => {
    expect(countDistinctLetter('abababa')).toBe(2);
  });
  it('returns 0 for string shorter than 3', () => {
    expect(countDistinctLetter('ab')).toBe(0);
  });
  it('returns 1 for string of length 3', () => {
    expect(countDistinctLetter('abc')).toBe(1);
  });
  it('returns correct count for repeated substrings', () => {
    expect(countDistinctLetter('abcabcabc')).toBe(3);
  });
  it('returns correct count for all unique substrings', () => {
    expect(countDistinctLetter('abcdef')).toBe(4);
  });
});

describe('isValidPhoneNumber', () => {
  it('returns true for valid phone number', () => {
    expect(isValidPhoneNumber('123-123-123')).toBe(true);
  });
  it('returns false for letters in phone number', () => {
    expect(isValidPhoneNumber('1a2-123-432')).toBe(false);
  });
  it('returns false for spaces in phone number', () => {
    expect(isValidPhoneNumber('123 123 123')).toBe(false);
  });
  it('returns false for too many groups', () => {
    expect(isValidPhoneNumber('123-123-123-123')).toBe(false);
  });
  it('returns false for too few groups', () => {
    expect(isValidPhoneNumber('123-123')).toBe(false);
  });
  it('returns false for group with wrong length', () => {
    expect(isValidPhoneNumber('12-123-123')).toBe(false);
    expect(isValidPhoneNumber('123-12-123')).toBe(false);
    expect(isValidPhoneNumber('123-123-12')).toBe(false);
  });
});

describe('maxPalindromicTriplets', () => {
  // Basic examples from the problem description
  it('should return 2 for "aaaabc"', () => {
    expect(maxPalindromicTriplets('aaaabc')).toBe(2);
    // Can form "aba" and "aca"
  });

  it('should return 1 for "xyvzwy"', () => {
    expect(maxPalindromicTriplets('xyvzwy')).toBe(1);
    // Can form one palindrome like "yxy" or "yvy"
  });

  it('should return 0 for "dd"', () => {
    expect(maxPalindromicTriplets('dd')).toBe(0);
    // Not enough characters to form a 3-letter palindrome
  });

  it('should return 2 for "fknfkn"', () => {
    expect(maxPalindromicTriplets('fknfkn')).toBe(2);
    // Can form "fkf" and "nkn"
  });

  // Edge cases
  it('should return 0 for empty string', () => {
    expect(maxPalindromicTriplets('')).toBe(0);
  });

  it('should return 0 for single character', () => {
    expect(maxPalindromicTriplets('a')).toBe(0);
  });

  it('should return 0 for two characters', () => {
    expect(maxPalindromicTriplets('ab')).toBe(0);
  });

  // Palindromes with same characters
  it('should return 1 for "ddd"', () => {
    expect(maxPalindromicTriplets('ddd')).toBe(1);
    // Can form "ddd"
  });

  it('should return 2 for "dddddd"', () => {
    expect(maxPalindromicTriplets('dddddd')).toBe(2);
    // Can form "ddd" twice
  });

  it('should return 3 for "aaaaaaaaaa"', () => {
    expect(maxPalindromicTriplets('aaaaaaaaaa')).toBe(3);
    // 10 'a's can form 3 palindromes: "aaa", "aaa", "aaa"
  });

  // More complex cases
  it('should handle mixed characters with multiple pairs', () => {
    expect(maxPalindromicTriplets('aabbcc')).toBe(2);
    // Can form "aba" and "cbc" or similar combinations
  });

  it('should handle case where pairs exceed available middle characters', () => {
    expect(maxPalindromicTriplets('aabb')).toBe(1);
    // Have 2 pairs but only 4 total characters, so max 1 palindrome
  });

  it('should handle alternating pattern', () => {
    expect(maxPalindromicTriplets('abababab')).toBe(2);
    // 4 'a's and 4 'b's, can form 2 palindromes
  });

  it('should handle three of each character', () => {
    expect(maxPalindromicTriplets('aaabbb')).toBe(2);
    // Can form "aba" and "bab"
  });

  it('should handle minimum case for palindrome formation', () => {
    expect(maxPalindromicTriplets('abc')).toBe(0);
    // No pairs available, cannot form palindromes
  });

  // Additional edge cases
  it('should handle string with all same characters', () => {
    expect(maxPalindromicTriplets('aaaa')).toBe(1);
    // 4 characters = max 1 palindrome (limited by string length / 3)
  });

  it('should handle string with 9 same characters', () => {
    expect(maxPalindromicTriplets('aaaaaaaaa')).toBe(3);
    // 9 'a's can form 3 palindromes
  });

  it('should handle two pairs with no singles', () => {
    expect(maxPalindromicTriplets('aabb')).toBe(1);
    // 2 pairs, only 4 chars total, so max 1 palindrome
  });

  it('should handle many pairs but limited by string length', () => {
    expect(maxPalindromicTriplets('aabbccdd')).toBe(2);
    // 4 pairs (a, b, c, d) but only 8 chars, so limited to floor(8/3) = 2
  });

  it('should handle three pairs with extra singles', () => {
    expect(maxPalindromicTriplets('aabbccx')).toBe(2);
    // 3 pairs + 1 single, 7 total chars, max floor(7/3) = 2
  });

  it('should handle large number of pairs', () => {
    expect(maxPalindromicTriplets('aabbccddeeffgghhii')).toBe(6);
    // 9 pairs, 18 total chars, limited by floor(18/3) = 6
  });

  it('should handle one pair with many singles', () => {
    expect(maxPalindromicTriplets('aabcde')).toBe(1);
    // 1 pair, 4 singles, can form 1 palindrome
  });

  it('should handle pattern with high frequency of one character', () => {
    expect(maxPalindromicTriplets('aaaaabbbbbccccc')).toBe(5);
    // 5 a-pairs + 5 b-pairs + 5 c-pairs = 15 pairs, but 15 chars = floor(15/3) = 5
  });

  // Boundary cases for the constraint
  it('should handle exactly 3 characters with valid palindrome', () => {
    expect(maxPalindromicTriplets('aba')).toBe(1);
    // Exactly 1 palindrome can be formed
  });

  it('should handle exactly 3 same characters', () => {
    expect(maxPalindromicTriplets('aaa')).toBe(1);
    // Forms "aaa"
  });

  it('should handle characters that cannot form any palindrome', () => {
    expect(maxPalindromicTriplets('abcdefg')).toBe(0);
    // No pairs, cannot form any palindromes
  });

  // Performance test cases
  it('should handle large string with many repeated characters (performance)', () => {
    const largeString = 'a'.repeat(10000);
    expect(maxPalindromicTriplets(largeString)).toBe(3333);
    // 10000 chars, floor(10000/3) = 3333, limited by length
  });

  it('should handle large string with multiple character types (performance)', () => {
    const largeString = 'ab'.repeat(5000); // 10000 chars total
    expect(maxPalindromicTriplets(largeString)).toBe(3333);
    // 5000 'a' pairs + 5000 'b' pairs, but limited by floor(10000/3) = 3333
  });

  it('should handle large string with balanced pairs (performance)', () => {
    const largeString = 'aabbccdd'.repeat(1000); // 8000 chars
    expect(maxPalindromicTriplets(largeString)).toBe(2666);
    // Many pairs but limited by floor(8000/3) = 2666
  });

  it('should handle large string with no pairs (performance)', () => {
    // Create a string with 10000 unique characters pattern
    let largeString = '';
    for (let i = 0; i < 10000; i++) {
      largeString += String.fromCharCode(97 + (i % 26));
    }
    const result = maxPalindromicTriplets(largeString);
    expect(result).toBeGreaterThan(0);
    // Will have many pairs due to repetition across the 26-letter cycle
  });

  it('should handle worst case with max constraint (performance)', () => {
    const largeString = 'abc'.repeat(33333) + 'ab'; // Close to 100000 chars
    expect(maxPalindromicTriplets(largeString)).toBeGreaterThan(0);
    // Should complete quickly even at max constraint
  });

  // Complex character distribution cases
  it('should handle uneven distribution with many singles', () => {
    expect(maxPalindromicTriplets('aaabbbcccdddeee')).toBe(5);
    // 5 pairs total, 15 chars, limited by floor(15/3) = 5
  });

  it('should handle case where singles limit palindrome formation', () => {
    expect(maxPalindromicTriplets('aabbcde')).toBe(2);
    // 2 pairs, 3 singles, 7 total chars, floor(7/3) = 2
  });

  it('should handle optimal palindrome formation', () => {
    expect(maxPalindromicTriplets('aabbcc')).toBe(2);
    // 3 pairs, 6 chars, can form exactly 2 palindromes
  });

  it('should handle string with 100 same characters', () => {
    expect(maxPalindromicTriplets('a'.repeat(100))).toBe(33);
    // 100 chars, floor(100/3) = 33
  });

  it('should handle mixed pattern with optimal length', () => {
    expect(maxPalindromicTriplets('aabbccddee')).toBe(3);
    // 5 pairs, 10 chars, floor(10/3) = 3
  });

  it('aaaabbcc', () => {
    expect(maxPalindromicTriplets('aaaabbcc')).toBe(2);
  });
});
