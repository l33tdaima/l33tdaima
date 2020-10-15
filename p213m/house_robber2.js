/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  const linearRob = function (nums) {
    // present minus 1, and present minus 2
    let [pm1, pm2] = [0, 0];
    for (let n of nums) {
      [pm1, pm2] = [Math.max(pm2 + n, pm1), pm1];
    }
    return pm1;
  };
  if (nums.length === 1) return nums[0];
  return Math.max(
    linearRob(nums.slice(0, nums.length - 1)),
    linearRob(nums.slice(1, nums.length))
  );
};

[
  [[2, 3, 2], 3],
  [[1, 2, 3, 1], 4],
  [[0], 0],
  [[1], 1],
  [[1, 2], 2],
  [[1, 5, 3], 5],
  [[5, 2, 2, 1], 7],
].forEach(([nums, expected]) => {
  const actual = rob(nums);
  console.log(
    'The maximum amount of money you can rob from',
    nums,
    '->',
    actual
  );
  console.assert(actual === expected);
});
