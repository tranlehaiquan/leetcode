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

  for (const n of arr) {
    if (numbers.length < 3) {
      numbers.push(n);
    } else {
      const minNumbers = Math.min(...numbers);

      if (n > minNumbers) {
        // replace min with new number
        numbers[numbers.indexOf(minNumbers)] = n;
      }
    }
  }
  return numbers.reduce((pre, current) => {
    if(!pre) return current;
    return pre * current;
  });
};

export default highestProduct;
