/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  const dp = Array.from({ length: nums.length }, (v) => 1);
  for (let n = 1; n < nums.length; ++n) {
    let x = 0;
    for (let i = 0; i < n; ++i) {
      if (nums[n] > nums[i]) x = Math.max(x, dp[i]);
    }
    dp[n] = x + 1;
  }
  return Math.max(...dp);
};
// TEST
[
  [[1], 1],
  [[10, 9, 2, 5, 3, 7, 101, 18], 4],
  [[0, 1, 0, 3, 2, 3], 4],
  [[7, 7, 7, 7, 7, 7, 7], 1],
  [[4, 5, 1, 2, 7], 3],
].forEach(([nums, expected]) => {
  const actual = lengthOfLIS(nums);
  console.log('Length of LIS in', nums, '->', actual);
  console.assert(actual === expected);
});
