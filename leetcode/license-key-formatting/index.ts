// https://leetcode.com/problems/license-key-formatting/

export function licenseKeyFormatting(s: string, k: number): string {
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

export function licenseKeyFormatting2(s: string, k: number): string {
  const cleaned = s.replace(/-/g, '').toUpperCase();

  if (cleaned.length === 0) return '';

  const groups = [];
  for (let i = cleaned.length; i > 0; i -= k) {
    groups.unshift(cleaned.substring(Math.max(i - k, 0), i));
  }

  return groups.join('-');
}
