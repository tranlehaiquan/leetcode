/**
 * binary search a sorted array
 * return the index of the number if found or -1 if not found
 * 
 * Assume: arr is sorted
 */
export const binarySearch = (
  arr: number[] | string[],
  search: number | string
) => {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const middle = Math.round((right + left) / 2);

    if (arr[middle] === search) return middle;
    if (arr[middle] > search) {
      // move right
      right = middle - 1;
    }
    if (arr[middle] < search) {
      // move left
      left = middle + 1;
    }
  }

  return -1;
};

// binary search with recursion
export const binarySearchRecursion = (
  arr: number[] | string[],
  search: number | string,
  offset: number = 0
): number => {
  const middle = Math.floor(arr.length / 2);
  // base case
  if (arr[middle] === search) return offset + middle;
  if (arr.length === 0) return -1;

  // recursion case
  if (arr[middle] > search)
    return binarySearchRecursion(arr.slice(0, middle), search, offset);
  if (arr[middle] < search)
    return binarySearchRecursion(
      arr.slice(middle + 1),
      search,
      offset + middle + 1
    );

  return -1;
};
