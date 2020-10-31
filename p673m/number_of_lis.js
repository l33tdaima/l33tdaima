/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumberOfLIS = function (nums) {
  let N = nums.length;
  if (N <= 1) return N;
  let lis = Array.from({ length: N }, (v) => 1);
  let nlis = Array.from({ length: N }, (v) => 1);
  let maxlen = 1;
  for (let i = 1; i < N; ++i) {
    for (let j = 0; j < i; ++j) {
      if (nums[i] <= nums[j]) continue;
      // This is an optimized version based on the knowledge
      // that in qualified nums[j], LIS is sympototically
      // increasing, if we are not 100% sure about this, we
      // should safely do two loops to compute LIS first,
      // NLIS second
      if (lis[j] >= lis[i]) {
        lis[i] = lis[j] + 1;
        nlis[i] = nlis[j];
      } else if (lis[j] + 1 === lis[i]) {
        nlis[i] += nlis[j];
      }
    }
    maxlen = Math.max(maxlen, lis[i]);
  }
  let ans = 0;
  for (let i = 0; i < N; ++i) {
    if (lis[i] === maxlen) ans += nlis[i];
  }
  return ans;
};
// TEST
[
  [[], 0],
  [[1], 1],
  [[1, 2, 4, 2, 3], 3],
  [[1, 3, 5, 4, 7], 2],
  [[2, 2, 2, 2, 2], 5],
].forEach(([nums, expected]) => {
  const actual = findNumberOfLIS(nums);
  console.log('Number of LIS of', nums, '->', actual);
  console.assert(actual === expected);
});
