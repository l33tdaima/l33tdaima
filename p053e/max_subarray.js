/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let [ans, s] = [nums[0], 0];
  for (let n of nums) {
    s = Math.max(s + n, n);
    ans = Math.max(ans, s);
  }
  return ans;
};
// TEST
[
  [[-1], -1],
  [[-2, 1, -3], 1],
  [[-2, -1, -3], -1],
  [[-2, 1, -3, 4], 4],
  [[-2, 1, -3, 4, -1, 2, 1, -5, 4], 6],
].forEach(([nums, expected]) => {
  const actual = maxSubArray(nums);
  console.log('Largest sum of subarray in', nums, '->', actual);
  console.assert(actual === expected);
});
