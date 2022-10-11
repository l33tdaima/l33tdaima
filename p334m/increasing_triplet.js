/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function (nums) {
  let [t1, t2] = [Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER];
  for (let n of nums) {
    if (n <= t1) t1 = n;
    else if (n <= t2) t2 = n;
    else return true;
  }
  return false;
};
// TEST
[
  [[1], false],
  [[1, 4], false],
  [[1, 4, 2], false],
  [[1, 2, 3, 4, 5], true],
  [[5, 4, 3, 2, 1], false],
  [[2, 1, 5, 0, 6], true],
  [[2, 1, 5, 0, 4, 6], true],
  [[3, 2, 1, 4, 2, 3], true],
  [
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 0, 0, 0, 10000],
    true,
  ],
].forEach(([nums, expected]) => {
  const actual = increasingTriplet(nums);
  console.log(
    'An increasing subsequence of length 3 exists in',
    nums,
    '->',
    actual
  );
  console.assert(actual === expected);
});
