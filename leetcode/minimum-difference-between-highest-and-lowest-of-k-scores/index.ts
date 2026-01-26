// LeetCode Problem: Minimum Difference Between Highest and Lowest of K Scores

function minimumDifference(nums: number[], k: number): number {
  if (nums.length === 0) return 0;
  if (k === 1) return 0;

  nums.sort((a, b) => a - b);
  let minDiff = Infinity;

  for (let i = 0; i <= nums.length - k; i++) {
    minDiff = Math.min(minDiff, nums[i + k - 1] - nums[i]);
  }

  return minDiff;
}

export { minimumDifference };
