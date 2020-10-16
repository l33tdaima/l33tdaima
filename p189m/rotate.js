/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  const swap = function (s, e) {
    while (s < e) [nums[s++], nums[e--]] = [nums[e], nums[s]];
  };
  let n = nums.length;
  k = k % n;
  if (k === 0 || k === n) return;
  swap(n - k, n - 1);
  swap(0, n - k - 1);
  swap(0, n - 1);
};
// TEST
[
  [[1, 2, 3, 4, 5, 6, 7], 0, [1, 2, 3, 4, 5, 6, 7]],
  [[1, 2, 3, 4, 5, 6, 7], 1, [7, 1, 2, 3, 4, 5, 6]],
  [[1, 2, 3, 4, 5, 6, 7], 2, [6, 7, 1, 2, 3, 4, 5]],
  [[1, 2, 3, 4, 5, 6, 7], 3, [5, 6, 7, 1, 2, 3, 4]],
  [[1, 2, 3, 4, 5, 6, 7], 11, [4, 5, 6, 7, 1, 2, 3]],
  [[-1, -100, 3, 99], 2, [3, 99, -1, -100]],
].forEach(([nums, k, expected]) => {
  console.log('Rotate', nums, 'to the right by', k, 'steps ->');
  rotate(nums, k);
  console.log('  ', nums);
  for (let i = 0; i < nums.length; ++i) console.assert(nums[i] === expected[i]);
});
