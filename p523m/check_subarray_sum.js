/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */

var checkSubarraySum = function (nums, k) {
  let sumMap = new Map(); // sum to index map
  sumMap.set(0, -1);
  let sum = 0;
  for (let i = 0; i < nums.length; ++i) {
    sum += nums[i];
    sum %= k;
    let j = sumMap.get(sum);
    if (j !== undefined) {
      if (i - j >= 2) return true;
    } else {
      sumMap.set(sum, i);
    }
  }
  return false;
};
// TEST
[
  [[0, 0], 1, true],
  [[23, 2, 4, 6, 7], 6, true],
  [[23, 2, 6, 4, 7], 6, true],
  [[23, 2, 6, 4, 7], 13, false],
  [[1], 2, false],
].forEach(([nums, k, expected]) => {
  const actual = checkSubarraySum(nums, k);
  console.log('There is subarray in', nums, 'sum up to n *', k, '? ->', actual);
  console.assert(actual === expected);
});
