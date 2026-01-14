// Given an array A of random permutation of numbers from 1 to N. Given the number of swaps in A
// That we can make.
// Find the largest permutation possible.
// • Constraints:
// • 1 < N < 1e6
// • 1 < B < 1e9

// It just like sort but with limited swaps

export const largestPermutationFirst = (arr: number[], k: number): number[] => {
  if (k === 0) return arr;
  let times = k;
  const result = [...arr];
  const arrSorted = result.sort((a, b) => b - a);
  const valueToKey = result.reduce<{ [key: string]: number }>(
    (pre, value, index) => {
      pre[value] = index;
      return pre;
    },
    {},
  );

  let i = 0;
  while (times > 0 && i < arr.length) {
    // if current item is the same
    if (result[i] !== arrSorted[i]) {
      // find key of current value
      const key = valueToKey[arrSorted[i]];

      // swap
      result[key] = result[i];
      result[i] = arrSorted[i];

      // update valueToKey
      valueToKey[result[i]] = key;
      valueToKey[arrSorted[i]] = result[i];

      times--;
    }

    i++;
  }

  return result;
};

export const largestPermutation = (arr: number[], k: number): number[] => {
  let i = 0;
  let max = arr.length;
  const valueToKey = arr.reduce<{ [key: string]: number }>(
    (pre, value, index) => {
      pre[value] = index;
      return pre;
    },
    {},
  );

  while (k > 0 && i < arr.length) {
    if (arr[i] !== max) {
      const key = valueToKey[max];
      valueToKey[max] = i;
      valueToKey[arr[i]] = key;

      const temp = arr[i];
      arr[i] = max;
      arr[key] = temp;

      k--;
    }

    max--;
    i++;
  }

  return arr;
};

export default largestPermutation;
