// Given a string s, find the length of the longest
// substring
//  without repeating characters.

// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2:

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = (s: string): number => {
  if(!s) return 0;

  let result = 1;
  let left = 0;

  for (let r = 1; r < s.length; r++) {
    const current = s[r];
    const subStr = s.slice(left, r);
    const indexOfR = subStr.indexOf(current);
  
    if (indexOfR >= 0) {
      left += indexOfR + 1;
    } else {
      result = Math.max(subStr.length + 1, result);
    }
  }

  return result;
};

export default lengthOfLongestSubstring;
