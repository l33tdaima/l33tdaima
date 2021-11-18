/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
  for (let n of nums) {
    let i = Math.abs(n) - 1;
    if (nums[i] > 0) nums[i] = -nums[i];
  }
  let ans = [];
  for (let i = 0; i < nums.length; ++i) {
    if (nums[i] > 0) ans.push(i + 1);
  }
  return ans;
};
// TEST
[
  [
    [4, 3, 2, 7, 8, 2, 3, 1],
    [5, 6],
  ],
  [[1, 1], [2]],
  [[4, 3, 2, 1], []],
].forEach(([nums, expected]) => {
  const actual = findDisappearedNumbers(Array.from(nums));
  console.log('All numbers disappeared in', nums, '->', actual);
  console.assert(actual.toString() === expected.toString());
});
