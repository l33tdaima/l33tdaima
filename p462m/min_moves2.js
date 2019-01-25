/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves2 = function(nums) {
  nums.sort((a, b) => a - b);
  let ans = 0;
  for (let l = 0, r = nums.length - 1; l < r; l++, r--) {
    ans += nums[r] - nums[l];
  }
  return ans;
};
// TESTS
[{ nums: [1, 2, 3], expected: 2 }].forEach(t => {
  let actual = minMoves2(t.nums);
  console.log("Minimum moves to equal array", t.nums, "->", actual);
  console.assert(t.expected === actual);
});
