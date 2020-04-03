/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  return nums.reduce((s, n) => s ^ n, 0);
};
// TEST
[
  [[2, 2, 1], 1],
  [[4, 1, 2, 1, 2], 4],
  [[1, 1, 90], 90],
  [[-3, 878, -3, 45, 9999, 45, 9999], 878]
].forEach(t => {
  const actual = singleNumber(t[0]);
  console.log('Single number in', t[0], '->', actual);
  console.assert(actual === t[1]);
});
