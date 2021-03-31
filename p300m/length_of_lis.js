/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  if (nums.length === 0) return 0;
  const dp = Array.from({ length: nums.length }, (v) => 1);
  let ans = 1;
  for (let n = 1; n < nums.length; ++n) {
    let max = 0;
    for (let i = 0; i < n; ++i) {
      if (nums[n] > nums[i]) max = Math.max(max, dp[i]);
    }
    dp[n] = max + 1;
    ans = Math.max(ans, dp[n]);
  }
  return ans;
};
// TEST
[
  [[], 0],
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
