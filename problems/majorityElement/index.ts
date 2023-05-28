// Given an array of integers of length N.
// Majority element occurs with > IN/2] frequency
// Find the majority element.
// • Constraints
// • 1 < N < 1e6

const majorityElement = (arr: number[]): number | undefined => {
  if (!arr.length) return;
  const dictionary = arr.reduce<Record<string, number>>((acc, current) => {
    acc[current] = acc[current] ? acc[current] + 1 : 1;
    return acc;
  }, {});

  const majority = Math.floor(arr.length / 2);
  let result;

  for(const key in dictionary) {
    if (dictionary[key] > majority) {
      result = Number(key);
      break;
    }
  }

  return result;
};

export default majorityElement;
