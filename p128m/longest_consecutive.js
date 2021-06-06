/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  const nset = new Set(nums);
  let ans = 0;
  for (let x of nset) {
    if (!nset.has(x - 1)) {
      let y = x + 1;
      while (nset.has(y)) y++;
      ans = Math.max(ans, y - x);
    }
  }
  return ans;
};
// TEST
[
  [[], 0],
  [[100], 1],
  [[100, 4, 200, 1, 3, 2], 4],
  [[0, 3, 7, 2, 5, 8, 4, 6, 0, 1], 9],
].forEach(function ([nums, expected]) {
  const actual = longestConsecutive(nums);
  console.log('The length of the longest consecutive subsequence ->', actual);
  console.assert(actual === expected);
});
