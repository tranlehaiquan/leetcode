// 🧩 Problem 1 — Count Distinct 3-Letter Substrings
// Description:
// Given a string S, determine how many distinct substrings of length 3 appear in it.
// Two substrings are considered the same if they contain the exact same three characters in the same order, regardless of where they occur in the string.
// Task:
// Return the number of unique 3-letter substrings in S.
// Example:
// Input:  S = "abababa"
// All 3-letter substrings are:
// aba, bab, aba, bab, aba
// There are only two distinct substrings: "aba" and "bab".
// Output: 2

export const countDistinctLetter = (s: string, max = 3) => {
  if (s.length < max) return 0;
  if (s.length === max) return 1;

  const dictionary: { [key: string]: boolean } = {};

  for (let x = 0; x + max <= s.length; x++) {
    const subS = s.slice(x, x + max);

    dictionary[subS] = true;
  }

  return Object.keys(dictionary).length;
};

// ☎️ Problem 2 — Validate Phone Number Format
// Description
// Given a string s, determine whether it represents a valid phone number.
// A valid phone number must:
// Consist of exactly 3 groups.
// Each group contains exactly 3 digits (0–9).
// Groups are separated by a single dash ('-').
// No other characters, spaces, or extra groups are allowed.
// Return True if s is a valid phone number, otherwise False.
// Function Signature
// def is_valid_phone_number(s: str) -> bool:
// Input
// A single string s containing digits, letters, and/or symbols.
// Output
// A boolean value indicating whether s is a valid phone number.
// Constraints
// 1 ≤ len(s) ≤ 20

// Example 1
// Input:  s = "123-123-123"
// Output: True

// Example 2
// Input:  s = "1a2-123-432"
// Output: False

// Example 3
// Input:  s = "123 123 123"
// Output: False

// Example 4
// Input:  s = "123-123-123-123"
// Output: False

export const isValidPhoneNumber = (s: string) => {
  // first solution
  // const regex = /^\d{3}[-]\d{3}[-]\d{3}$/;
  // return regex.test(s);

  // second solution
  if (s.length !== 11) return false;

  const numberGroup = s.split("-");
  const isValid = !numberGroup.some((i) => isNaN(+i));
  return isValid;
};
