/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  const ans = [];
  // Fold left
  nums.reduce((prod, v) => {
    ans.push(prod);
    return prod * v;
  }, 1);
  // Combine fold right and multiply to left
  nums.reduceRight((prod, v, i) => {
    ans[i] *= prod;
    return prod * v;
  }, 1);
  return ans;
};
// TEST
[
  [
    [1, 2, 3, 4],
    [24, 12, 8, 6],
  ],
  [
    [-1, 1, 0, -3, 3],
    [0, 0, 9, 0, 0],
  ],
].forEach(([nums, expected]) => {
  const actual = productExceptSelf(nums);
  console.log('Product array except itself ->', actual);
  console.assert(actual.toString() === expected.toString());
});
