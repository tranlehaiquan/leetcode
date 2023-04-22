// Problem Discussion
// Given N bulbs, either on (1) or off (0).
// Turning on ith bulb causes all remaining bulbs on the right to flip.
// Find the min number of switches to turn all the bulbs on.
// • Constraints:
// • 1 < N < 1e5
// • A[i] = {0, 1}

const isEven = (n: number): boolean => {
  return n % 2 === 0;
};

export const bulbsSwitch = (bulbs: number[]): number => {
  let cost = 0;

  for (const bulb of bulbs) {
    const bulbState = isEven(cost) ? !!bulb : !!!bulb;

    if (!bulbState) {
      cost++;
    }
  }

  return cost;
};
