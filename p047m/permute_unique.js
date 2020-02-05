/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
  nums.sort();
  const ans = [];
  const visited = Array.from(nums, v => false);

  const backtrack = function(wip) {
    if (wip.length === nums.length) {
      ans.push(Array.from(wip));
      return;
    }
    for (let i = 0; i < nums.length; ++i) {
      if (visited[i]) continue;
      if (i > 0 && nums[i] === nums[i - 1] && !visited[i - 1]) continue;
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

[
  [3, 3],
  [1, 2, 1],
  [2, 2, 1]
].forEach(t => {
  console.log(permuteUnique(t));
});
