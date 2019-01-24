/**
 * @param {number[]} nums
 * @return {number}
 */
var minMovesOLogN = function(nums) {
  nums.sort((a, b) => a - b);
  let ans = 0;
  for (let i = nums.length - 1; i > 0; --i) {
    ans += nums[i] - nums[0];
  }
  return ans;
};
var minMovesON = function(nums) {
  let sum = 0;
  let min = Number.MAX_SAFE_INTEGER;
  for (let n of nums) {
    sum += n;
    min = Math.min(min, n);
  }
  return sum - min * nums.length;
};
// TESTS
[
  { nums: [1], expected: 0 },
  { nums: [1, 6], expected: 5 },
  { nums: [1, 2, 3], expected: 3 },
  { nums: [1, 2, 3, 2, 1], expected: 4 },
  { nums: [1, 2, 3, 2, 1, 0], expected: 9 }
].forEach(t => {
  let actual = minMovesON(t.nums);
  console.log("Minimum moves to equal array", t.nums, "->", actual);
  console.assert(t.expected === actual);
});
