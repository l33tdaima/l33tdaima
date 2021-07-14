/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (nums) {
  let [l, r] = [0, nums.length - 1];
  while (l < r) {
    let m = ~~((r + l) / 2);
    if (nums[m] < nums[m + 1]) {
      l = m + 1;
    } else {
      r = m;
    }
  }
  return l;
};
// TEST
[
  [[1, 2], 1],
  [[2, 1], 0],
  [[1, 2, 1], 1],
  [[2, 1, 2], 2],
  [[1, 2, 3, 1], 2],
].forEach(([nums, expected]) => {
  const actual = findPeakElement(nums);
  console.log('Any peak of', nums, '->', actual);
  console.assert(actual === expected);
});
