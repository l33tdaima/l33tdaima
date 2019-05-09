/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
  let firstMax = Number.MIN_SAFE_INTEGER;
  let secondMax = firstMax;
  let thirdMax = firstMax;
  for (let n of nums) {
    if (n > firstMax) {
      [firstMax, secondMax, thirdMax] = [n, firstMax, secondMax];
    } else if (n < firstMax && n > secondMax) {
      [secondMax, thirdMax] = [n, secondMax];
    } else if (n < secondMax && n > thirdMax) {
      thirdMax = n;
    }
  }
  return thirdMax > Number.MIN_SAFE_INTEGER ? thirdMax : firstMax;
};
// TESTS
[
  [[3, 2, 1], 1],
  [[1, 2], 2],
  [[2, 2, 3, 1], 1],
  [[3, 2, 1, -9, 3, 44, 6, 6, 7, 1], 6]
].forEach(t => {
  const actual = thirdMax(t[0]);
  console.log('Third max in', t[0], '->', actual);
  console.assert(actual === t[1]);
});
