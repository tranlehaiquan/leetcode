// LeetCode Problem: 401. Binary Watch

const countNumberOne = (n: number) => {
  let count = 0;
  while (n > 0) {
    if (n % 2 === 1) {
      count++;
    }
    n = n >> 1;
  }
  return count;
};

export function readBinaryWatch(turnedOn: number): string[] {
  const result: string[] = [];

  for (let h = 0; h < 12; h++) {
    for (let m = 0; m < 60; m++) {
      if (countNumberOne(h) + countNumberOne(m) === turnedOn) {
        const mzeros = `${m}`.padStart(2, '0');
        result.push(`${h}:${mzeros}`);
      }
    }
  }

  return result;
}
