/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteV1 = function(nums) {
  if (nums.length <= 1) {
    return [nums];
  }
  let permutations = [];
  for (let i = 0; i < nums.length; ++i) {
    let subnums = Array.from(nums);
    subnums.splice(i, 1);
    let subperm = permute(subnums);
    for (let j = 0; j < subperm.length; ++j) {
      subperm[j].unshift(nums[i]);
    }
    permutations = permutations.concat(subperm);
  }
  return permutations;
};

var permuteV2 = function(nums) {
  const backtrack = function(ans, wip, visited) {
    if (wip.length === nums.length) {
      ans.push(Array.from(wip));
      return;
    }
    for (let i = 0; i < nums.length; ++i) {
      if (visited[i]) continue;
      visited[i] = true;
      wip.push(nums[i]);
      backtrack(ans, wip, visited);
      wip.pop();
      visited[i] = false;
    }
  };
  let ans = new Array();
  let visited = Array.from(nums, v => false);
  backtrack(ans, [], visited);
  return ans;
};
// TESTS
[[1, 2], [1, 2, 3], [1, 2, 3, 4]].forEach(t => {
  console.log(permuteV2(t));
});
