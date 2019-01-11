/**
 * @param {number[]} houses
 * @param {number[]} heaters
 * @return {number}
 */
var findRadius = function(houses, heaters) {
  houses.sort((a, b) => a - b);
  heaters.sort((a, b) => a - b);
  let ans = Number.MIN_SAFE_INTEGER;
  let i = 0;
  for (let ho of houses) {
    while (
      ho > heaters[i] &&
      i < heaters.length - 1 &&
      heaters[i] + heaters[i + 1] <= ho * 2
    ) {
      i++;
    }
    ans = Math.max(ans, Math.abs(ho - heaters[i]));
    // console.log(i, j, ans);
  }
  return ans;
};
// TESTS
[
  {
    houses: [1, 2, 3],
    heaters: [2],
    expected: 1
  },
  {
    houses: [1, 2, 3, 4],
    heaters: [1, 4],
    expected: 1
  },
  {
    houses: [1, 1, 1, 1, 1, 1, 999, 999, 999, 999, 999],
    heaters: [499, 500, 501],
    expected: 498
  },
  {
    houses: [1, 2, 3, 4, 5, 6, 7],
    heaters: [1, 2, 3, 4, 5, 6, 7],
    expected: 0
  }
].forEach(t => {
  let actual = findRadius(t.houses, t.heaters);
  console.log(
    "Minimum radius of houses",
    t.houses,
    "and heaters",
    t.heaters,
    "->",
    actual
  );
  console.assert(actual === t.expected);
});
