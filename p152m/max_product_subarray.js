/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  if (nums.length === 0) return 0;
  let ans = nums[0];
  for (let i = 1, lmin = ans, lmax = ans; i < nums.length; ++i) {
    if (nums[i] < 0) [lmin, lmax] = [lmax, lmin];
    lmax = Math.max(nums[i], lmax * nums[i]);
    lmin = Math.min(nums[i], lmin * nums[i]);
    ans = Math.max(lmax, ans);
  }
  return ans;
};
// TEST
[
  [[2, 3, -2, 4], 6],
  [[-2, 0, -1], 0],
  [[], 0],
  [[1], 1],
  [[-2], -2],
  [[1, -2], 1],
  [[-1, -3], 3],
  [[3, -1, 4], 4],
  [[3, -1, 2, 6], 12],
  [[-2, -3, 0, -4], 6],
  [[-2, 1, -3, -4], 12],
  [[-2, 1, -3, 1, -4], 12],
  [[-2, 1, -3, 1, -4, -2], 48],
  [[-2, 1, -3, 1, -4, -2, 0, 49], 49],
].forEach(([nums, expected]) => {
  const actual = maxProduct(nums);
  console.log('Max product of subarray in', nums, '->', actual);
  console.assert(actual === expected);
});
