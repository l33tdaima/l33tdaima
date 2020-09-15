/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  // present minus 1, and present minus 2
  let [pm1, pm2] = [0, 0];
  for (let n of nums) {
    [pm2, pm1] = [pm1, Math.max(pm2 + n, pm1)];
  }
  return pm1;
};

[
  [[], 0],
  [[1], 1],
  [[1, 2], 2],
  [[2, 1], 2],
  [[1, 5, 3], 5],
  [[1, 3, 3], 4],
  [[1, 2, 3, 1], 4],
  [[5, 2, 2, 1], 7],
  [[2, 5, 2, 1], 6],
  [[3, 2, 4, 2], 7],
  [[2, 7, 9, 3, 1], 12],
].forEach(([nums, expected]) => {
  const actual = rob(nums);
  console.log('The max robbed amount of', nums, '->', actual);
  console.assert(actual === expected);
});
