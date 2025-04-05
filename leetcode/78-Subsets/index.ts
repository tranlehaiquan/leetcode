// 78. Subsets
// Medium
// Topics
// Companies
// Given an integer array nums of unique elements, return all possible subsets (the power set).

// The solution set must not contain duplicate subsets. Return the solution in any order.

// Example 1:

// Input: nums = [1,2,3]
// Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
// Example 2:

// Input: nums = [0]
// Output: [[],[0]]

// Constraints:

// 1 <= nums.length <= 10
// -10 <= nums[i] <= 10
// All the numbers of nums are unique.

function subsets(nums: number[]): number[][] {
  const result: number[][] = [];

  function dfs(index: number, path: number[]): void {
    result.push([...path]);

    // Explore further elements
    for (let i = index; i < nums.length; i++) {
      path.push(nums[i]); // Choose nums[i]
      dfs(i + 1, path); // Recurse with next index
      path.pop(); // Backtrack
    }
  }

  dfs(0, []);
  return result;
}

// Test cases
console.log(subsets([1, 2, 3]));
