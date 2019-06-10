/**
 * @param {number[][]} M
 * @return {number[][]}
 */
const DIR = [
  [-1, -1],
  [-1, 0],
  [-1, 1],
  [0, -1],
  [0, 0],
  [0, 1],
  [1, -1],
  [1, 0],
  [1, 1]
];
var imageSmoother = function(M) {
  let ans = Array.from({ length: M.length }, v => []);
  for (let i = 0; i < M.length; ++i) {
    for (let j = 0; j < M[i].length; ++j) {
      let [count, sum] = [0, 0];
      for (let d of DIR) {
        let [ni, nj] = [i + d[0], j + d[1]];
        if (ni >= 0 && ni < M.length && M[ni][nj] !== undefined) {
          count++;
          sum += M[ni][nj];
        }
      }
      ans[i].push(~~(sum / count));
    }
  }
  return ans;
};

[[[1, 1, 1], [1, 0, 1], [1, 1, 1]]].forEach(t => {
  console.log('Image smoother of', t, '->', imageSmoother(t));
});
