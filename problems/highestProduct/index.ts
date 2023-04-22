// Given an array of N integers.
// Find the highest product by multiplying 3 elements.
// •Constraints:
// • 3 < N < 5e5

// Input: [1, 2, 3, 4]
// Output: 2 * 3 * 4 = 24

// Input: [0, -1, 10, 7, 5]
// Output: 5 * 7 * 10 = 350
const highestProduct = (arr: number[]): number => {
  const numbers: number[] = [];
  const sortedArr: number[] = arr.sort((a, b) => a - b);

  // 3 highest numbers
  const threeHighest =
    (sortedArr.at(-1) as number) *
    (sortedArr.at(-2) as number) *
    (sortedArr.at(-3) as number);
  // 2 lowest numbers and 1 highest number
  const twoLowestOneHighest =
    (sortedArr.at(0) as number) *
    (sortedArr.at(1) as number) *
    (sortedArr.at(-1) as number);

  return Math.max(threeHighest, twoLowestOneHighest);
};

export default highestProduct;
