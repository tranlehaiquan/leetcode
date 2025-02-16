import { describe, it, expect } from 'vitest';
import { romanToInt } from './index';

describe('romanToInt', () => {
  it('should return 1 for "I"', () => {
    expect(romanToInt('I')).toBe(1);
  });

  it('should return 4 for "IV"', () => {
    expect(romanToInt('IV')).toBe(4);
  });

  it('should return 9 for "IX"', () => {
    expect(romanToInt('IX')).toBe(9);
  });

  it('should return 58 for "LVIII"', () => {
    expect(romanToInt('LVIII')).toBe(58);
  });

  it('should return 1994 for "MCMXCIV"', () => {
    expect(romanToInt('MCMXCIV')).toBe(1994);
  });

  it('should return 0 for empty string', () => {
    expect(romanToInt('')).toBe(0);
  });

  it('should return 3 for "III"', () => {
    expect(romanToInt('III')).toBe(3);
  });

  it('should return 20 for "XX"', () => {
    expect(romanToInt('XX')).toBe(20);
  });

  it('should return 40 for "XL"', () => {
    expect(romanToInt('XL')).toBe(40);
  });

  it('should return 90 for "XC"', () => {
    expect(romanToInt('XC')).toBe(90);
  });

  it('should return 400 for "CD"', () => {
    expect(romanToInt('CD')).toBe(400);
  });

  it('should return 1000 for "M"', () => {
    expect(romanToInt('M')).toBe(1000);
  });

  it('should return 3999 for "MMMCMXCIX"', () => {
    expect(romanToInt('MMMCMXCIX')).toBe(3999);
  });
});