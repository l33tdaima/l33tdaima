/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {
  const ans = [];
  let start = nums[0];
  for (let i = 1; i <= nums.length; ++i) {
    if (nums[i] != nums[i - 1] + 1) {
      ans.push(start === nums[i - 1] ? `${start}` : `${start}->${nums[i - 1]}`);
      start = nums[i];
    }
  }
  return ans;
};
// TEST
[
  [0, 1, 2, 4, 5, 7],
  [0, 2, 3, 4, 6, 8, 9],
  [0, 2, 4, 6, 8, 10],
  [0, 1, 2, 3, 4, 5],
].forEach((nums) => {
  console.log('Summary ranges of', nums, '->', summaryRanges(nums));
});
