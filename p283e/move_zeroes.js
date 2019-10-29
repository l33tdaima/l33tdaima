/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  let j = 0;
  for (let i = 0; i < nums.length; ++i) {
    if (nums[i] !== 0) nums[j++] = nums[i];
  }
  while (j < nums.length) nums[j++] = 0;
};
// TEST
[[], [1, 2], [0, 1], [2, 0, 1], [0, 1, 0, 3, 12]].forEach(function(test) {
  console.log('Move', test, 'zeros ->');
  moveZeroes(test);
  console.log(test);
});
