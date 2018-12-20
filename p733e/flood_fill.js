/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, newColor) {
  const DIR = [[-1, 0], [0, -1], [1, 0], [0, 1]];
  let recHelper = function(r, c, parColor) {
    if (r < 0 || r >= image.length) return;
    if (c < 0 || c >= image[r].length) return;
    if (parColor !== image[r][c] || newColor === image[r][c]) return;
    let currColor = image[r][c];
    image[r][c] = newColor;
    DIR.forEach(dir => {
      recHelper(r + dir[0], c + dir[1], currColor);
    });
  };

  recHelper(sr, sc, image[sr][sc]);
  return image;
};
// TESTS
[
  {
    image: [[1, 1, 1], [1, 1, 0], [1, 0, 1]],
    sr: 1,
    sc: 1,
    newColor: 2
  }
].forEach(t => {
  console.log(
    "Flood fill",
    t.image,
    "from (" + t.sr + "," + t.sc + ") by new color",
    t.newColor,
    "->"
  );
  let ans = floodFill(t.image, t.sr, t.sc, t.newColor);
  console.log(ans);
});
