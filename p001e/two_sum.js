/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; ++i) {
    let complement = target - nums[i];
    if (map.has(complement)) return [map.get(complement), i];
    else map.set(nums[i], i);
  }
  return [-1, -1];
};
// TESTS
[
  [[2, 7, 11, 15], 9, [0, 1]],
  [[3, 2, 4], 6, [1, 2]],
  [[3, 3], 6, [0, 1]],
].forEach(([nums, target, expected]) => {
  const actual = twoSum(nums, target);
  console.log('Two sum in', nums, 'for target', target, '->', actual);
  console.assert(actual.toString() === expected.toString());
});
