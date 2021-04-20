/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var combinationSum4BottomUp = function (nums, target) {
  nums.sort((a, b) => a - b);
  let dp = Array.from({ length: target + 1 }, (v) => 0);
  dp[0] = 1;
  for (let t = 1; t <= target; ++t) {
    for (let num of nums) {
      if (t < num) continue;
      dp[t] += dp[t - num];
    }
  }
  return dp[target];
};
var combinationSum4TopDown = function (nums, target) {
  let dp = new Map([[0, 1]]);
  let f = function (target) {
    if (dp.has(target)) return dp.get(target);
    let ans = nums
      .filter((n) => n <= target)
      .reduce((p, n) => p + f(target - n), 0);
    dp.set(target, ans);
    return ans;
  };
  return f(target);
};
// TEST
[
  [[1, 2, 3], 4, 7],
  [[9], 3, 0],
  [[4, 2, 1], 32, 39882198],
].forEach(([nums, target, expected]) => {
  const actual = combinationSum4TopDown(nums, target);
  console.log('# of combinations in', nums, 'sums to', target, '->', actual);
  console.assert(actual === expected);
  console.assert(combinationSum4BottomUp(nums, target) === expected);
});
