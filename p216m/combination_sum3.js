/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function (k, n) {
  let ans = [];
  /**
   * Recursive Backtrack helper function
   * closure {number[][]} solutions: output
   * @param {number[]} workPath:  temporary working path
   * @param {number}   remTarget: ramaining target
   * @param {number}   start: index in candidates to start search
   */
  let recBacktracing = function (workPath, remTarget, start) {
    if (workPath.length == k) {
      if (remTarget === 0) ans.push(Array.from(workPath));
      return;
    }
    for (let i = start; i <= 9; ++i) {
      workPath.push(i);
      recBacktracing(workPath, remTarget - i, i + 1);
      workPath.pop();
    }
  };
  recBacktracing([], n, 1);
  return ans;
};
[
  [0, 0],
  [1, 9],
  [3, 7],
  [3, 9],
].forEach(([k, n]) => {
  console.log(
    `Combinations of ${k} digits summing to ${n} ->`,
    combinationSum3(k, n)
  );
});
