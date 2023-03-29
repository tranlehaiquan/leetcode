const maximumNumber = (items: number[], maxNumber?: number): number | null => {
  // base case
  if (items.length === 0) return maxNumber || null;

  // recursion case
  const newMax = maxNumber ? Math.max(items[0], maxNumber) : items[0];
  return maximumNumber(items.slice(1), newMax);
};

export default maximumNumber;
