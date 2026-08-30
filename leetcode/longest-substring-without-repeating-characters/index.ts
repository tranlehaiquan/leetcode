// LeetCode Problem: longest-substring-without-repeating-characters
function lengthOfLongestSubstring(s: string): number {
  const deDupSet = new Set();
  let max = 0;
  let l = 0;

  for (let i = 0; i < s.length; i++) {
    const item = s[i];
    if (!deDupSet.has(item)) {
      deDupSet.add(item);
      max = Math.max(max, deDupSet.size);
      continue;
    }

    while (s[l] != item) {
      deDupSet.delete(s[l]);
      l++;
    }
    l++;
    max = Math.max(max, deDupSet.size);
  }

  return max;
}

export default lengthOfLongestSubstring;
