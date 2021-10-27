/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  let [first1, last1] = [0, nums.length - 1]; // indices of the first 1 and the first 2
  for (let i = 0; i <= last1; ) {
    if (nums[i] < 1) {
      [nums[first1], nums[i]] = [nums[i], nums[first1]];
      first1++;
      i++;
    } else if (nums[i] > 1) {
      [nums[i], nums[last1]] = [nums[last1], nums[i]];
      last1--;
    } else {
      i++;
    }
  }
};
// TEST
[
  [],
  [1, 0],
  [2, 1],
  [2, 0, 1],
  [0, 0, 0],
  [1, 1, 1],
  [2, 2, 2],
  [2, 1, 0, 2, 1, 0],
  [2, 2, 2, 1, 1, 0, 0, 0],
].forEach((nums) => {
  sortColors(nums);
  console.log('Sort colors ->', nums);
});
