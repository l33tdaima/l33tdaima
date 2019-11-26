/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  let [ans, s] = [Number.NEGATIVE_INFINITY, 0];
  for (let n of nums) {
    s = Math.max(s + n, n);
    ans = Math.max(ans, s);
  }
  return ans;
};
// TEST
[
  [],
  [-1],
  [-2, 1, -3],
  [-2, -1, -3],
  [-2, 1, -3, 4],
  [-2, 1, -3, 4, -1, 2, 1, -5, 4]
].forEach(t => {
  console.log('Largest sum of subarray in', t, '->', maxSubArray(t));
});
