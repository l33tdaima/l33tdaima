/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  const N = nums.length;
  if (N === 0) return 0;
  const dp = Array.from({ length: N }, (v) => 1);
  let ans = 1;
  for (let n = 1; n < N; ++n) {
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
  [[4, 5, 1, 2, 7], 3],
].forEach((t) => {
  actual = lengthOfLIS(t[0]);
  console.log('Length of LIS in', t[0], '->', actual);
  console.assert(actual === t[1]);
});
