/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  const deque = []; // store the indices of candidates
  const ans = [];
  for (let i = 0; i < nums.length; ++i) {
    while (deque && nums[deque[deque.length - 1]] < nums[i]) {
      deque.pop();
    }
    if (deque && deque[0] === i - k) {
      deque.shift();
    }
    deque.push(i);
    if (i >= k - 1) ans.push(nums[deque[0]]);
  }
  return ans;
};
//TEST
[
  [[], 1, []],
  [[0], 1, [0]],
  [[1, 3, -1, -3, 5, 3, 6, 7], 3, [3, 3, 5, 5, 6, 7]],
  [[1], 1, [1]],
  [[1, -1], 1, [1, -1]],
  [[9, 11], 2, [11]],
  [[4, -2], 2, [4]],
].forEach(([nums, k, expected]) => {
  const actual = maxSlidingWindow(nums, k);
  console.log('Max of sliding window of k =', k, 'in', nums, '->', actual);
  console.assert(actual.toString() === expected.toString());
});
