/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
  flowerbed = [0].concat(flowerbed).concat([0]);
  for (let i = 0; i < flowerbed.length - 1; ++i) {
    if (
      flowerbed[i - 1] === 0 &&
      flowerbed[i] === 0 &&
      flowerbed[i + 1] === 0
    ) {
      flowerbed[i] = 1;
      if (--n == 0) return true;
    }
  }
  return n <= 0;
};
// TEST
[
  [[0], 1, true],
  [[0, 0], 1, true],
  [[1, 0, 1], 1, false],
  [[1, 0, 0, 0, 1], 1, true],
  [[1, 0, 0, 0, 1], 2, false],
].forEach(([flowerbed, n, expected]) => {
  const actual = canPlaceFlowers(flowerbed, n);
  console.log('Can place', n, 'flowers in', flowerbed, '->', actual);
  console.assert(actual === expected);
});
