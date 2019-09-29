/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; ++i) {
    let complement = target - nums[i];
    if (map.has(complement)) return [map.get(complement), i];
    map.set(nums[i], i);
  }
  return [];
};
// TESTS
[
  [[], 9],
  [[3, 2, 4], 4],
  [[3, 2, 4], 6],
  [[2, 7, 11, 15], 9],
  [[1, 2, 3, 5, 6, 7], 15]
].forEach(t => {
  const actual = twoSum(t[0], t[1]);
  console.log('Two sum in', t[0], 'of', t[1], '->', actual);
});
