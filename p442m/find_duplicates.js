/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function (nums) {
  const ans = [];
  for (let n of nums) {
    let key = Math.abs(n) - 1;
    if (nums[key] > 0) nums[key] *= -1;
    else ans.push(key + 1);
  }
  return ans;
};
// TEST
[
  [[4, 1, 2, 3], []],
  [[5, 1, 2, 3, 5], [5]],
  [
    [4, 3, 2, 7, 8, 2, 3, 1],
    [2, 3],
  ],
  [[1, 1, 2], [1]],
  [[1], []],
].forEach(([nums, expected]) => {
  const actual = findDuplicates(nums);
  console.log('Find duplicates in', nums, '->', actual);
  console.assert(actual.toString() === expected.toString());
});
