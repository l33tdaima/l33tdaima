/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  candidates.sort((a, b) => a - b);
  const ans = [];
  /**
   * Recursive Backtrack helper function
   * closure {number[][]} solutions: output
   * closure {number[]} candidates
   * @param {number[]} workPath:  temporary working path
   * @param {number}   remTarget: ramaining target
   * @param {number}   start: index in candidates to start search
   */
  const recBacktrack = function (workPath, remTarget, start) {
    if (remTarget < 0) return;
    if (remTarget === 0) {
      ans.push(Array.from(workPath));
      return;
    }
    for (let i = start; i < candidates.length; ++i) {
      workPath.push(candidates[i]);
      recBacktrack(workPath, remTarget - candidates[i], i);
      workPath.pop();
    }
  };
  recBacktrack([], target, 0);
  return ans;
};
[
  [[2, 3, 6, 7], 7],
  [[3, 4, 5, 6, 7, 8, 9, 11, 12], 15],
  [[1, 2, 3], 4],
].forEach(([candidates, target]) => {
  console.log(
    'Combinations in',
    candidates,
    'sum to',
    target,
    '->',
    combinationSum(candidates, target)
  );
});
