// LeetCode Problem: 153. Find Minimum in Rotated Sorted Array

function findMin(nums: number[]): number {
  let l = 0;
  let r = nums.length - 1;
  let min = nums[0];

  while (l <= r) {
    const midIndex = Math.round((r + l) / 2);
    const mid = nums[midIndex];
    const left = nums[l];
    const right = nums[r];

    if (left < right) {
      min = Math.min(min, left);
      break;
    }

    min = Math.min(min, mid);
    if (mid >= left) {
      l = midIndex + 1;
    } else {
      r = midIndex - 1;
    }
  }

  return min;
}
export { findMin };
