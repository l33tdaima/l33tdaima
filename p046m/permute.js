/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  let ans = [];
  let visited = Array.from(nums, v => false);
  const backtrack = function(wip) {
    if (wip.length === nums.length) {
      ans.push(Array.from(wip));
      return;
    }
    for (let i = 0; i < nums.length; ++i) {
      if (visited[i]) continue;
      visited[i] = true;
      wip.push(nums[i]);
      backtrack(wip);
      wip.pop();
      visited[i] = false;
    }
  };
  backtrack([]);
  return ans;
};
// TESTS
[
  [1, 2],
  [1, 2, 3],
  [1, 2, 3, 4]
].forEach(t => {
  console.log(permute(t));
});
