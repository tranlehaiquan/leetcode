const sum = (numbers: number[]): number => {
  // base case
  if (!numbers.length) return 0;

  // recursion case
  return numbers[0] + sum(numbers.slice(1));
};

export default sum;
