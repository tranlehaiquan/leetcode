// You want to divide a farm evenly into squares
// the plots to be big as possible

const solution = (farm: number[]): number => {
  const length = Math.max(farm[0], farm[1]);
  const width = Math.min(farm[0], farm[1]);
  // base case
  if (length % width === 0) {
    return width;
  }

  // recursion case
  // make the farm smaller
  const newFarm: [number, number] = [width, length - width];
  return solution(newFarm);
};

export default solution;
