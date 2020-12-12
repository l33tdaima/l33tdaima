/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let k = 0;
  for (let n of nums) {
    if (k < 2 || n > nums[k - 2]) nums[k++] = n;
  }
  return k;
};
// TEST
[
  [[], 0],
  [[1], 1],
  [[2, 2], 2],
  [[1, 1, 1, 2, 2, 3], 5],
  [[0, 0, 1, 1, 1, 1, 2, 3, 3], 7],
  [[3, 3, 3, 4, 5, 6, 6, 7, 8, 9], 9],
].forEach(([nums, expected]) => {
  const copy = Array.from(nums);
  let actual = removeDuplicates(nums);
  console.log('Removing duplicates from', nums, '->', nums.slice(0, actual));
  console.assert(actual === expected);
});
