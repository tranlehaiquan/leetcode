import { countDistinctLetter, isValidPhoneNumber } from "./index";

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
