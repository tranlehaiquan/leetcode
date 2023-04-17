// quicksort idea
// Pick a pivot
//  then move all items less than pivot to left
const quickSort = (arr: number[]): number[] => {
  // base case
  if (!arr.length || arr.length === 1) return arr;
  if (arr.length == 2) {
    return [Math.min(...arr), Math.max(...arr)];
  }

  // recursion case
  const pivot = Math.floor(arr.length / 2);
  const greater = [];
  const less = [];

  for (let x = 0; x < arr.length; x++) {
    const item = arr[x];
    if (item >= arr[pivot] && x !== pivot) {
      greater.push(item);
    }
    if (item < arr[pivot] && x !== pivot) {
      less.push(item);
    }
  }

  return [...quickSort(less), arr[pivot], ...quickSort(greater)];
};

export default quickSort;
