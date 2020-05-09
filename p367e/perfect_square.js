/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquareLinear = function (num) {
  for (let i = 0, sq = 0; sq <= num; ++i, sq = i * i) {
    if (sq === num) return true;
  }
  return false;
};
var isPerfectSquareMath = function (num) {
  // a perfect square is 1 + 3 + 5 + 7 ...
  let i = 1;
  while (num > 0) {
    num -= i;
    i += 2;
  }
  return num === 0;
};
var isPerfectSquareNewton = function (num) {
  let r = num;
  while (r * r > num) {
    r = ~~((r + num / r) / 2);
  }
  return r * r === num;
};
// TEST
[
  [1, true],
  [2, false],
  [14, false],
  [16, true],
  [255, false],
  [256, true],
].forEach((t) => {
  console.log('Is', t[0], 'perfect square? ->', t[1]);
  console.assert(isPerfectSquareLinear(t[0]) == t[1]);
  console.assert(isPerfectSquareMath(t[0]) == t[1]);
  console.assert(isPerfectSquareNewton(t[0]) == t[1]);
});
