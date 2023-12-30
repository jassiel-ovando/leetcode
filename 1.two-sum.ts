/*
 * @lc app=leetcode id=1 lang=typescript
 *
 * [1] Two Sum
 */

// @lc code=start
function twoSum(nums: number[], target: number): number[] {
  // Declaration of a new map constant to store the calculations
  const map = new Map<number, { index: number }>();

  // Iteration over the array nums
  for(let i = 0; i < nums.length; i++) {
    const num = target - nums[i];
    const part = map.get(num);

    if (part) return [part.index, i];

    map.set(nums[i], { index: i});
  }

  return [];
};
// @lc code=end

