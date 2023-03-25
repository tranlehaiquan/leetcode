/**
 * binary search a sorted array
 * return the index of the number if found or -1 if not found
 */
export const binarySearch = (arr: number[] | string[], search: number | string) => {
  let left = 0;
  let right = arr.length - 1;

  while(left <= right) {
    const middle = Math.round((right + left) / 2);

    if(arr[middle] === search) return middle;
    if(arr[middle] > search) {
      // move right
      right = middle - 1;
    }
    if(arr[middle] < search) {
      // move left
      left = middle + 1;
    }
  }

  return -1;
}

