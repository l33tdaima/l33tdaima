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
  [0, 0],
  [1, 2],
  [2, 3, 4],
  [1, 2, 3, 4],
].forEach((t) => {
  console.log('Product array except itself ->', productExceptSelf(t));
});
