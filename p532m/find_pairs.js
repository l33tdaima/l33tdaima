/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findPairs = function (nums, k) {
  const count = new Map();
  for (let n of nums) {
    let c = count.get(n) || 0;
    count.set(n, c + 1);
  }
  let ans = 0;
  count.forEach((v, n) => {
    if ((k === 0 && count.get(n) > 1) || (k > 0 && count.has(n + k))) ans++;
  });
  return ans;
};
// TESTS
[
  {
    nums: [3, 1, 4, 1, 5],
    k: 2,
    expected: 2,
  },
  {
    nums: [1, 2, 3, 4, 5],
    k: 1,
    expected: 4,
  },
  {
    nums: [1, 3, 1, 5, 4],
    k: 0,
    expected: 1,
  },
  {
    nums: [1, 2, 4, 4, 3, 3, 0, 9, 2, 3],
    k: 3,
    expected: 2,
  },
  {
    nums: [-1, -2, -3],
    k: 1,
    expected: 2,
  },
].forEach(({ nums, k, expected }) => {
  const actual = findPairs(nums, k);
  console.log(`The # of ${k}-diff pairs in array`, nums, '->', actual);
  console.assert(actual === expected);
});
