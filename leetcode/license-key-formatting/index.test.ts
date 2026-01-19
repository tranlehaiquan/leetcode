function licenseKeyFormatting(s: string, k: number): string {
  const letters = s
    .split('')
    .map((i) => i.toUpperCase())
    .filter((i) => i != '-');
  let result = [];
  const leng = letters.length;
  if (!leng) return '';
  for (let i = leng - 1; i >= 0; i -= k) {
    result.unshift(letters.slice(Math.max(i + 1 - k, 0), i + 1).join(''));
  }

  return result.join('-');
}

describe('licenseKeyFormatting', () => {
  test('case 1', () => {
    expect(licenseKeyFormatting('5F3Z-2e-9-w', 4)).toBe('5F3Z-2E9W');
  });

  test('case 2', () => {
    expect(licenseKeyFormatting('2-5g-3-J', 2)).toBe('2-5G-3J');
  });

  test('case 3', () => {
    expect(licenseKeyFormatting('---', 3)).toBe('');
  });

  // performance test
  test('performance case', () => {
    const input = 'r'.repeat(100000);
    const k = 10000;
    const expectedOutput = Array(10).fill('R'.repeat(10000)).join('-');
    expect(licenseKeyFormatting(input, k)).toBe(expectedOutput);
  });
});
