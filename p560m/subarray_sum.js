/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

var subarraySum = function(nums, k) {
  let sumCountMap = new Map();
  sumCountMap.set(0, 1);
  let [sum, ans] = [0, 0];
  for (let num of nums) {
    sum += num;
    let v = sumCountMap.get(sum - k);
    if (v) ans += v;
    // update map
    v = sumCountMap.get(sum) || 0;
    sumCountMap.set(sum, v + 1);
  }
  return ans;
};
// TEST
[
  [[1], 0, 0],
  [[1, 1, 1], 2, 2],
  [[1, 2, 3, 4, 5], 11, 0],
  [[3, 4, 7, 2, -3, 1, 4, 2], 7, 4]
].forEach(t => {
  const act = subarraySum(t[0], t[1]);
  console.log('# of subarrays of', t[0], 'sum to', t[1], '=>', act);
  console.assert(act === t[2]);
});
