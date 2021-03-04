/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumberV1 = function (nums) {
  return nums.reduce((xs, v, i) => xs ^ v ^ i, nums.length);
};
var missingNumberV2 = function (nums) {
  let sum = nums.reduce((sum, v) => sum + v, 0);
  let n = nums.length;
  return (n * (n + 1)) / 2 - sum;
};
// TESTS
const f = (nums, expected) => [nums, expected];
[
  f([3, 0, 1], 2),
  f([0, 1], 2),
  f([9, 6, 4, 2, 3, 5, 7, 0, 1], 8),
  f([0], 1),
].forEach(([nums, expected]) => {
  const actual = missingNumberV1(nums);
  console.log('The missing number in', nums, '->', actual);
  console.assert(actual === expected);
  console.assert(expected === missingNumberV2(nums));
});
