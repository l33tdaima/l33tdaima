/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
  let sum = nums.reduce((prev, curr) => prev + curr, 0);
  let leftSum = 0;
  for (let i = 0; i < nums.length; ++i) {
    if (leftSum * 2 === sum - nums[i]) return i;
    leftSum += nums[i];
  }
  return -1;
};
// TESTS
[
  [[], -1],
  [[1], 0],
  [[1, 9, 1], 1],
  [[1, 0, 1], 1],
  [[-11, 0, -11], 1],
  [[1, 7, 3, 6, 5, 6], 3],
  [[1, 2, 3], -1],
  [[-1, -1, -1, 0, 1, 1], 0]
].forEach(t => {
  let actual = pivotIndex(t[0]);
  console.log("Pivot index of", t[0], "->", actual);
  console.assert(actual === t[1]);
});
