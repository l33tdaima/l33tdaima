/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

var subarraySum = function (nums, k) {
  let sumCountMap = new Map();
  sumCountMap.set(0, 1);
  let [sum, ans] = [0, 0];
  for (let n of nums) {
    sum += n;
    let v = sumCountMap.get(sum - k) || 0;
    ans += v;
    // update map
    sumCountMap.set(sum, 1 + (sumCountMap.get(sum) || 0));
  }
  return ans;
};
// TEST
[
  [[1], 0, 0],
  [[1, 1, 1], 2, 2],
  [[1, 2, 3, 4, 5], 11, 0],
  [[3, 4, 7, 2, -3, 1, 4, 2], 7, 4],
].forEach(([nums, k, expected]) => {
  const actual = subarraySum(nums, k);
  console.log('# of subarrays of', nums, 'sum to', k, '->', actual);
  console.assert(actual === expected);
});
