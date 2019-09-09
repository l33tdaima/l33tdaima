/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  let sol = [];
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 2; ++i) {
    // avoid duplicates on the first element
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    let [lo, hi] = [i + 1, nums.length - 1];
    while (lo < hi) {
      if (nums[i] + nums[lo] + nums[hi] === 0) {
        sol.push([nums[i], nums[lo], nums[hi]]);
        // avoid duplicates on the second element
        while (lo < hi && nums[lo] === nums[lo + 1]) lo++;
        // avoid duplicates on the third element
        while (lo < hi && nums[hi] === nums[hi - 1]) hi--;
        lo++;
        hi--;
      } else if (nums[i] + nums[lo] + nums[hi] < 0) {
        lo++;
      } else {
        hi--;
      }
    }
  }
  return sol;
};
// TEST
[
  [0],
  [0, 0, 0],
  [0, 1, -1, -1, 0, 1, 2, -1, -4],
  [-4, -2, -2, -2, 0, 1, 2, 2, 2, 3, 3, 4, 4, 6, 6]
].forEach(t => {
  console.log('Solutions of 3 sum for', t, '->');
  let sol = threeSum(t);
  sol.forEach((val, index) => {
    console.log('  ', index, ': ', val);
  });
});
