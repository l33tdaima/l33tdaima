/**
 * @param {number[]} nums
 * @return {number[]}
 */

var sortArrayByParityOutPlace = function (nums) {
  let ans = new Array(nums.length);
  let [le, ro] = [0, nums.length - 1];
  for (let a of nums) {
    if ((a & 1) === 0) ans[le++] = a;
    else ans[ro--] = a;
  }
  return ans;
};

var sortArrayByParityFunctional = function (nums) {
  return nums.reduce((ans, a) => {
    if (a % 2 === 0) ans.unshift(a);
    else ans.push(a);
    return ans;
  }, []);
};

var sortArrayByParityInPlace = function (nums) {
  let [le, ro] = [0, nums.length - 1];
  while (le < ro) {
    if (nums[le] % 2 === 0) le++;
    else if (nums[ro] % 2 !== 0) ro--;
    else if (le < ro && le < nums.length && ro > 0) {
      [nums[le], nums[ro]] = [nums[ro], nums[le]];
    }
  }
  return nums;
};
// TESTS
[
  [],
  [1, 2],
  [1, 3],
  [2, 4],
  [3, 1, 2, 4],
  [1, 2, 3, 4, 5],
  [1, 2, 3, 4, 5, 6, 7, 8],
].forEach((t) => {
  let orig = Array.from(t);
  console.log(
    'Sort',
    orig,
    'by parity ->',
    sortArrayByParityFunctional(t),
    sortArrayByParityOutPlace(t),
    sortArrayByParityInPlace(t)
  );
});
