const sumNumbers = (numbers: number[]): number => {
  return numbers.reduce((acc, curr) => {
    return acc + curr;
  }, 0);
};

export default sumNumbers;