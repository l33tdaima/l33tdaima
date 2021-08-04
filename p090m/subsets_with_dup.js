/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
  const ans = [];
  nums.sort();

  const backtrack = (wip, start) => {
    ans.push(Array.from(wip));
    for (let i = start; i < nums.length; ++i) {
      if (i > start && nums[i] === nums[i - 1]) continue;
      wip.push(nums[i]);
      backtrack(wip, i + 1);
      wip.pop();
    }
  };

  backtrack([], 0);
  return ans;
};
// TEST
[
  [
    [1, 2, 2],
    [[], [1], [1, 2], [1, 2, 2], [2], [2, 2]],
  ],
  [[0], [[], [0]]],
].forEach(([nums, expected]) => {
  const actual = subsetsWithDup(nums);
  console.log('Subsets with dups of', nums, '->', actual);
  console.assert(actual.toString() === expected.toString());
});
