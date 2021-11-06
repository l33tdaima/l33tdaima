/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function (nums) {
  const xor = nums.reduce((s, num) => s ^ num, 0);
  const lastsetbit = xor & -xor; // extract the last set bit
  const ans = [0, 0];
  for (let n of nums) {
    if (n & lastsetbit) ans[0] ^= n;
    else ans[1] ^= n;
  }
  return ans;
};
// TEST
[
  [
    [1, 2, 1, 3, 2, 5],
    [3, 5],
  ],
  [
    [-1, 0],
    [-1, 0],
  ],
  [
    [0, 1],
    [0, 1],
  ],
  [
    [1, 5, 5, 1, 98, 98, 23, 58, -1, -1],
    [23, 58],
  ],
].forEach(([nums, expected]) => {
  const actual = singleNumber(nums).sort();
  console.log('Two single nums in', nums, '->', actual);
  console.assert(actual.toString() === expected.toString());
});
