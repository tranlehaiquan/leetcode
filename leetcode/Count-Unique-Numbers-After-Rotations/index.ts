function solution(s: string, b: number): number {
  if (s.length === 0 || b === 0) return 0;

  let current = s;
  const numbers = new Set();

  for (let x = 0; x < s.length; x++) {
    numbers.add(current);

    current = current.slice(-b) + current.slice(0, -b);

    if (current === s) {
      break;
    }
  }

  return numbers.size;
}

export default solution;
