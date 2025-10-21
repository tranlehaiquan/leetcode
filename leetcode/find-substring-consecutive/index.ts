// problem find substring consecutive
// for example: "aabbccddaa" => "aa", "bb", "cc", "dd", "aa" => 5
// xxyz => "xx" => 1

export const countDistinctLetter = (s: string): number => {
  let result = 0;
  const listDup = [];

  for (let x = 0; x < s.length; x++) {
    let start = x;
    let next = x + 1;
    const current = s[x];

    while (current === s[next]) {
      next++;

      x = next - 1;
    }

    if (next - start >= 2) {
      listDup.push(s.slice(start, next));
    }
  }

  return result;
};
