import { describe, it, expect } from 'vitest';
import { isValid } from './index';

describe('isValid', () => {
  // Simple valid cases
  it('should return true for single pair of parentheses', () => {
    expect(isValid('()')).toBe(true);
  });

  it('should return true for single pair of brackets', () => {
    expect(isValid('[]')).toBe(true);
  });

  it('should return true for single pair of braces', () => {
    expect(isValid('{}')).toBe(true);
  });

  // Multiple valid cases
  it('should return true for consecutive pairs', () => {
    expect(isValid('()()')).toBe(true);
  });

  it('should return true for different types of brackets', () => {
    expect(isValid('()[]{}')).toBe(true);
  });

  it('should return true for nested pairs', () => {
    expect(isValid('([])')).toBe(true);
  });

  it('should return true for complex nested pairs', () => {
    expect(isValid('([{}])')).toBe(true);
  });

  // Invalid cases
  it('should return false for mismatched pairs', () => {
    expect(isValid('(]')).toBe(false);
  });

  it('should return false for incomplete pairs', () => {
    expect(isValid('(')).toBe(false);
  });

  it('should return false for wrong order', () => {
    expect(isValid(')(')).toBe(false);
  });

  it('should return false for invalid characters', () => {
    expect(isValid('(a)')).toBe(false);
  });

  // Edge cases
  it('should return true for empty string', () => {
    expect(isValid('')).toBe(true);
  });

  it('should handle long valid string', () => {
    expect(isValid('({[]}){[]}')).toBe(true);
  });
});