/**
 * @param {number[]} nums
 * @return {number}
 */
var maxCoins = function (nums) {
  const balloons = Array.from(nums);
  balloons.push(1);
  balloons.unshift(1);
  const n = balloons.length;
  // coins[l][r] is maxCoins from balloon l to r, not including l, r
  let coins = Array.from({ length: n }, (v) =>
    Array.from({ length: n }, (k) => 0)
  );
  for (let range = 2; range < n; ++range) {
    for (let l = 0; l < n - range; ++l) {
      let r = l + range;
      for (let k = l + 1; k < r; ++k) {
        let c =
          coins[l][k] + coins[k][r] + balloons[l] * balloons[k] * balloons[r];
        coins[l][r] = Math.max(coins[l][r], c);
      }
    }
  }
  return coins[0][n - 1];
};
// TEST
[
  [[3, 1, 5, 8], 167],
  [[3, 0, 1, 5, 0, 8], 167],
].forEach(([nums, expected]) => {
  const actual = maxCoins(nums);
  console.log('Max coins to burst in', nums, '->', actual);
  console.assert(actual === expected);
});
