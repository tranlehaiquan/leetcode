import { countDistinctLetter } from './index';

describe('countDistinctLetter', () => {
  it('should count consecutive groups in aabbccddaa', () => {
    expect(countDistinctLetter('aabbccddaa')).toBe(5);
  });

  it('should count consecutive groups in xxyz', () => {
    expect(countDistinctLetter('xxyz')).toBe(1);
  });

  it('should return 0 when no consecutive characters exist', () => {
    expect(countDistinctLetter('abcdef')).toBe(0);
  });

  it('should count single group of many characters', () => {
    expect(countDistinctLetter('aaaaa')).toBe(1);
  });

  it('should count groups correctly in aaabbb', () => {
    expect(countDistinctLetter('aaabbb')).toBe(2);
  });

  it('should return 0 for empty string', () => {
    expect(countDistinctLetter('')).toBe(0);
  });
});
