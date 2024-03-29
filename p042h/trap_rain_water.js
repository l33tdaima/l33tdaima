/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  let [left, right] = [0, height.length - 1];
  let [frLeft, frRight] = [0, 0];
  let totalTrap = 0;
  while (left < right) {
    if (height[left] < height[right]) {
      if (height[left] < frLeft) {
        totalTrap += frLeft - height[left];
      } else {
        frLeft = height[left];
      }
      ++left;
    } else {
      if (height[right] < frRight) {
        totalTrap += frRight - height[right];
      } else {
        frRight = height[right];
      }
      --right;
    }
  }
  return totalTrap;
};
// TEST
[
  [[0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1], 6],
  [[1, 0, 1, 3, 2, 1, 2, 1, 0, 0, 1, 0], 4],
  [[4, 2, 0, 3, 2, 5], 9],
].forEach(([height, expected]) => {
  const actual = trap(height);
  console.log('Trapped rain water in', height, ' -> ', actual);
  console.assert(actual === expected);
});
