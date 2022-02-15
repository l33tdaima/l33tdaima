/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  return nums.reduce((s, n) => s ^ n, 0);
};
// TEST
[
  [[2, 2, 1], 1],
  [[4, 1, 2, 1, 2], 4],
  [[1, 1, 90], 90],
  [[-3, 878, -3, 45, 9999, 45, 9999], 878],
].forEach(([nums, expected]) => {
  const actual = singleNumber(nums);
  console.log('Single number in', nums, '->', actual);
  console.assert(actual === expected);
});
