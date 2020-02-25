/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
  const ans = [];
  const backtrack = function(path, start) {
    if (path.length === k) {
      ans.push(Array.from(path));
      return;
    }
    for (let i = start; i <= n; ++i) {
      path.push(i);
      backtrack(path, i + 1);
      path.pop();
    }
  };

  backtrack([], 1);
  return ans;
};

[
  [1, 1],
  [2, 1],
  [2, 2],
  [3, 1],
  [3, 2],
  [3, 3],
  [4, 1],
  [4, 2],
  [4, 3],
  [4, 4],
  [5, 2]
].forEach(t => {
  console.log('Combination (', t[0], ',', t[1], ') ->', combine(t[0], t[1]));
});
