import { MaxHeap } from '../../heap/heap';

function isPossible(target: number[]): boolean {
  let total = target.reduce((a, b) => a + b);
  const heap = new MaxHeap(target);

  while (total > target.length) {
    const max = heap.extract();
    const rest = total - max;

    // Edge cases
    if (rest === 0 || max <= rest) {
      return false;
    }

    let newValue = max % rest;

    // if newValue === 0, it mean max is a multiple of rest
    // we need at least 1, so use the rest instead
    if (!newValue) newValue = rest;

    if (newValue < 1) {
      return false;
    }

    heap.insert(newValue);
    total = rest + newValue;
  }

  return total === target.length;
}

// [9, 3, 5], total = 17
// max=9, rest=8

// [2, 9], t=11
// max=9, rest=2
// [2, 7]
// [2, 5]
// [2, 3]
// [2, 1]
// [1, 1]

export default isPossible;
