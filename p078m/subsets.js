/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
  const solutions = [];
  const backtrack = function(wip, start) {
    solutions.push(Array.from(wip));
    for (let i = start; i < nums.length; ++i) {
      wip.push(nums[i]);
      backtrack(wip, i + 1);
      wip.pop();
    }
  };
  backtrack([], 0);
  return solutions;
};

var subsetsByBit = function(nums) {
  const solutions = Array.from({ length: 2 ** nums.length }, v => []);
  for (let i = 0; i < solutions.length; ++i) {
    for (let b = 0; b < nums.length; ++b) {
      if ((i >> b) & 1) solutions[i].push(nums[b]);
    }
  }
  return solutions;
};
// TEST
[[], [1], [1, 2], [1, 2, 3]].forEach(t => {
  console.log('-----');
  console.log('Backtracking solution of', t, '->\n', subsets(t));
  console.log('Bit Manipulation solution of', t, '->\n', subsetsByBit(t));
});
