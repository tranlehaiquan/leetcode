/**
 * @param {number[]} nums
 * @return {number}
 */
 var pivotIndex = function(nums) {
  let start = 0;
  let left = 0;

  let right = nums.slice(1, nums.length).reduce((prev, current) => prev + current, 0);
  
  while(start < nums.length) {
      console.log(left, right)
      if(left === right) {
          return start;
      }
      
      left += nums[start];
      right -= nums[start + 1];
      start++;
  }
  
  return -1;
};