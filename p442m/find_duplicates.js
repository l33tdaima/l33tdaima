/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function (nums) {
  const ans = [];
  for (let i = 0; i < nums.length; ++i) {
    let key = Math.abs(nums[i]) - 1;
    if (nums[key] > 0) nums[key] *= -1;
    else ans.push(key + 1);
  }
  return ans;
};
// TEST
[
  [4, 1, 2, 3],
  [5, 1, 2, 3, 5],
  [4, 3, 2, 7, 8, 2, 3, 1],
].forEach((t) => {
  console.log('Find duplicates in', t, '->', findDuplicates(t));
});
