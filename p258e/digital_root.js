/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function (num) {
  return 1 + ((num - 1) % 9);
};
// TESTS
[
  [0, 0],
  [11, 2],
  [8, 8],
  [38, 2],
  [1853, 8],
  [2035, 1],
].forEach((t) => {
  actual = addDigits(t[0]);
  console.log('Digital root of', t[0], '->', actual);
  console.assert(actual === t[1]);
});
