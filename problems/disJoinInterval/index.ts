// Given a list of intervals:
// [start, end].
// Find the length of the maximal set of mutually disjoint intervals.
// • Constraints:
// • 1 < N < 1e5
// • 1 ≤ A[i][0] < AÇi][1] < 1e9

// Input: [[1,2], [2, 10], [4, 6]]
// Output: 2
// Explanation:
// Select [1,2] and [4, 6].
// Selecting [2, 10] will block [1,2] and [4, 6]

const disjointInterval = (arr: number[][]): number => {
  const arrSorted = arr.sort((a, b) => a[1] - b[1]);
  let result = 0;
  let lastInterval: number[] = [];

  for (const item of arrSorted) {
    if (!lastInterval.length) {
      lastInterval = item;
      result++;
    } else {
      const [start] = item;

      if (start > lastInterval[1]) {
        result++;
        lastInterval = item;
      }
    }
  }

  return result;
};

export default disjointInterval;