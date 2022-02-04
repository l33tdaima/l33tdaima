/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function (nums) {
  let [count, ans] = [0, 0];
  const map = new Map();
  map.set(0, -1);
  for (let i = 0; i < nums.length; ++i) {
    count += nums[i] || -1;
    if (map.has(count)) ans = Math.max(ans, i - map.get(count));
    else map.set(count, i);
  }
  return ans;
};
// TEST
[
  [[1, 0], 2],
  [[0, 1, 0], 2],
  [[0, 1, 0, 0, 1], 4],
  [[0, 1, 0, 0, 1, 1, 0], 6],
  [[0, 0, 0, 0, 0, 0, 0], 0],
  [[1, 1, 1, 1, 1], 0],
].forEach(([nums, expected]) => {
  const actual = findMaxLength(nums);
  console.log('Max length of breakeven subarray in', nums, '->', actual);
  console.assert(actual === expected);
});
