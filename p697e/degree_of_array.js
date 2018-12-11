/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArrayReadable = function(nums) {
  const map = new Map();
  let ans = {
    count: 0,
    first: 0,
    span: nums.length
  };
  nums.forEach((n, i) => {
    let v = map.get(n) || {
      count: 0,
      first: i,
      span: 1
    };
    v.count++;
    v.span = i - v.first + 1;
    map.set(n, v);
    if (v.count > ans.count || (v.count === ans.count && v.span < ans.span)) {
      ans = v;
    }
  });
  return ans.span;
};

var findShortestSubArrayOpt = function(nums) {
  const map = new Map();
  // A tuple of (count, first, span)
  let ans = [0, 0, nums.length];
  for (let i = 0; i < nums.length; ++i) {
    let v = map.get(nums[i]) || [0, i, 1];
    v[0]++;
    v[2] = i - v[1] + 1;
    map.set(nums[i], v);
    if (v[0] > ans[0] || (v[0] === ans[0] && v[2] < ans[2])) {
      ans = v;
    }
  }
  return ans[2];
};
// TESTS
[
  {
    nums: [1, 2, 2, 3, 1],
    expected: 2
  },
  {
    nums: [1, 2, 5, 2, 3, 3],
    expected: 2
  },
  {
    nums: [1, 2, 2, 3, 1, 4, 2],
    expected: 6
  }
].forEach(t => {
  let actual = findShortestSubArrayOpt(t.nums);
  console.log("Shortest subarray with maximum degree of", t.nums, "->", actual);
  console.assert(actual === t.expected);
});
