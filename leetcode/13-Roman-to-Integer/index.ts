const RomanToNumber: { [key: string]: number } = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

export function romanToInt(s: string): number {
  let result = 0;

  for (let x = 0; x < s.length; x++) {
    const roman = s[x];
    const currentNumber = RomanToNumber[roman];

    if (x === 0) {
      result += currentNumber;
      continue;
    }

    const previousNumber = RomanToNumber[s[x - 1]];
    const isSubtract = previousNumber < currentNumber;

    if (isSubtract) {
      result += currentNumber - previousNumber * 2;
    } else {
      result += currentNumber;
    }
  }

  return result;
}
