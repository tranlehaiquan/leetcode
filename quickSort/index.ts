const quickSort = (arr: number[]): number[] => {
  // base case
  if (!arr.length || arr.length === 1) return arr;
  if (arr.length == 2) {
    return [Math.min(...arr), Math.max(...arr)];
  }

  // recursion case
  const pivot = Math.floor(arr.length / 2);
  const greater = arr.filter((i, index) => {
    return i >= arr[pivot] && index !== pivot;
  });
  const less = arr.filter((i, index) => {
    return i < arr[pivot] && index !== pivot;
  });

  return [...quickSort(less), arr[pivot], ...quickSort(greater)];
};

export const quickSortWithLoop = (arr: number[]): number[] => {
  // base case
  if (!arr.length || arr.length === 1) return arr;
  if (arr.length == 2) {
    return [Math.min(...arr), Math.max(...arr)];
  }

  return arr;
}

export default quickSort;
