/**
 * binary search a sorted array
 * return the index of the number if found or -1 if not found
 */
export const binarySearch = (arr: number[], number: number) => {
  let left = 0;
  let right = arr.length - 1;

  while(left <= right) {
    const middle = Math.round((right + left) / 2);

    if(arr[middle] === number) return middle;
    if(arr[middle] > number) {
      // move right
      right = middle - 1;
    }
    if(arr[middle] < number) {
      // move left
      left = middle + 1;
    }
  }

  return -1;
}

