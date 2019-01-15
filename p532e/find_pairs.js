/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findPairs = function(nums, k) {
  if (k < 0) return 0;
  let map = new Map();
  for (let n of nums) {
    let count = map.get(n) || 0;
    map.set(n, count + 1);
  }
  let ans = 0;
  map.forEach((v, n) => {
    let c = map.get(n + k) || 0;
    if ((k === 0 && c > 1) || (k > 0 && c >= 1)) {
      ans++;
    }
  });
  return ans;
};
// TESTS
[
  {
    nums: [3, 1, 4, 1, 5],
    k: 2,
    expected: 2
  },
  {
    nums: [3, 2, 4, 1, 5],
    k: 1,
    expected: 4
  },
  {
    nums: [3, 1, 4, 1, 5],
    k: 0,
    expected: 2
  },
  {
    nums: [1, 2, 3, 4, 5],
    k: -1,
    expected: 4
  }
].forEach(t => {
  const actual = findPairs(t.nums, t.k);
  console.log("K-diff pairs in array", t.nums, "with k =", t.k, "->", actual);
});
