/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
const DIR = [
  [-1, 0],
  [0, -1],
  [1, 0],
  [0, 1],
];
var floodFill = function (image, sr, sc, newColor) {
  const oldColor = image[sr][sc];
  if (oldColor === newColor) return image;

  let recHelper = (r, c) => {
    image[r][c] = newColor;
    for (let d of DIR) {
      const [nr, nc] = [r + d[0], c + d[1]];
      if (nr < 0 || nr >= image.length) continue;
      if (nc < 0 || nc >= image[r].length) continue;
      if (image[nr][nc] !== oldColor) continue;
      recHelper(nr, nc);
    }
  };
  recHelper(sr, sc);
  return image;
};
// TESTS
[
  {
    image: [
      [1, 1, 1],
      [1, 1, 0],
      [1, 0, 1],
    ],
    sr: 1,
    sc: 1,
    newColor: 2,
  },
  {
    image: [
      [1, 0, 1],
      [0, 1, 0],
      [1, 0, 1],
    ],
    sr: 0,
    sc: 0,
    newColor: 2,
  },
].forEach((t) => {
  console.log(
    'Flood fill',
    t.image,
    'from (' + t.sr + ',' + t.sc + ') by new color',
    t.newColor,
    '->'
  );
  let ans = floodFill(t.image, t.sr, t.sc, t.newColor);
  console.log(ans);
});
