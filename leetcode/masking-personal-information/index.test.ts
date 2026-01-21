import maskPII from '.';

describe('maskPII', () => {
  test('case 1', () => {
    expect(maskPII('LeetCode@LeetCode.com')).toBe('l*****e@leetcode.com');
  });

  test('case 2', () => {
    expect(maskPII('AB@qq.com')).toBe('a*****b@qq.com');
  });

  test('case 3', () => {
    expect(maskPII('1(234)567-890')).toBe('***-***-7890');
  });

  test('case 4', () => {
    expect(maskPII('JackAndJill@Gmail.Com')).toBe('j*****l@gmail.com');
  });

  test('case 5', () => {
    expect(maskPII('(3906)2 07143 711')).toBe('+***-***-***-3711');
  });
});
