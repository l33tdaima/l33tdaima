/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
  let [l, r] = [0, nums.length - 1];
  while (l < r) {
    let m = ~~((r - l) / 2) + l;
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
  [[1, 2, 3, 1], 2]
].forEach(t => {
  const actual = findPeakElement(t[0]);
  console.log('Any peak of', t[0], '->', actual);
  console.assert(t[1] === actual);
});
