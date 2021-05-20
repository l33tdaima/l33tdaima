/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves2 = function (nums) {
  nums.sort((a, b) => a - b);
  let ans = 0;
  for (let l = 0, r = nums.length - 1; l < r; l++, r--) {
    ans += nums[r] - nums[l];
  }
  return ans;
};
// TESTS
[
  [[1, 2, 3], 2],
  [[1, 10, 2, 9], 16],
].forEach(([nums, expected]) => {
  let actual = minMoves2(nums);
  console.log('Minimum moves to equal array', nums, '->', actual);
  console.assert(expected === actual);
});
