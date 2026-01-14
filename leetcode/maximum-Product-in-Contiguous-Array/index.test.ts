import { describe, it, expect } from 'vitest';
import maxProductSubArray from './index';

describe('maxProductSubArray', () => {
  it('should return the product of a single element subarray', () => {
    expect(maxProductSubArray([9])).toBe(9);
  });

  it('should find the largest product in a subarray with negative numbers', () => {
    expect(maxProductSubArray([1, 2, -3, 5, 1])).toBe(5);
  });

  it('should find the largest product in a subarray with zeros', () => {
    expect(maxProductSubArray([1, 2, 0, -1, 8, -4])).toBe(32);
  });

  it('should handle all positive numbers', () => {
    expect(maxProductSubArray([2, 3, 4])).toBe(24);
  });

  it('should handle all negative numbers with even count', () => {
    expect(maxProductSubArray([-2, -3])).toBe(6);
  });

  it('should handle all negative numbers with odd count', () => {
    expect(maxProductSubArray([-2, -3, -4])).toBe(12);
  });

  it('should handle array with single negative number', () => {
    expect(maxProductSubArray([-5])).toBe(-5);
  });

  it('should handle array with zeros and positive numbers', () => {
    expect(maxProductSubArray([0, 2])).toBe(2);
  });

  it('should handle array with multiple zeros', () => {
    expect(maxProductSubArray([0, 0, 0])).toBe(0);
  });

  it("should find product of entire array when it's maximum", () => {
    expect(maxProductSubArray([2, 3, -2, 4])).toBe(6);
  });

  it('should handle negative result when all products are negative', () => {
    expect(maxProductSubArray([-1])).toBe(-1);
  });

  it('should handle large positive products', () => {
    expect(maxProductSubArray([5, 6, 7])).toBe(210);
  });
});
