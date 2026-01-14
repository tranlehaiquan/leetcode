// https://leetcode.com/problems/move-zeroes/description/?envType=study-plan-v2&envId=leetcode-75

/**
 Do not return anything, modify nums in-place instead.
 */
export function moveZeroes(nums: number[]) {
  let left = 0;
  let right = 1;

  // [0,1,0,3,12]
  while (left < nums.length && right < nums.length) {
    const leftN = nums[left];
    const rightN = nums[right];

    if (leftN) {
      left++;
      right = left + 1;
    } else if (rightN === 0) {
      right++;
    } else {
      nums[left] = rightN;
      nums[right] = leftN;
      left++;
      right++;
    }
  }

  return nums;
}

console.log(moveZeroes([0, 1, 0, 3, 12]));

// [0,1,0,3,12]
// 0, 1 -> [1,0,0,3,12]
//
