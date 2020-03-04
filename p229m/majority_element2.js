/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
  if (nums == null || nums.length === 0) return [];
  let [m1, m2] = [null, null];
  let [c1, c2] = [0, 0];
  // Eliminating
  for (let n of nums) {
    if (n === m1) {
      c1++;
    } else if (n === m2) {
      c2++;
    } else if (c1 === 0) {
      m1 = n;
      c1 = 1;
    } else if (c2 === 0) {
      m2 = n;
      c2 = 1;
    } else {
      c1--;
      c2--;
    }
  }
  // Counting
  [c1, c2] = [0, 0];
  for (let n of nums) {
    if (n === m1) c1++;
    else if (n === m2) c2++;
  }
  let ans = [];
  if (c1 > nums.length / 3) ans.push(m1);
  if (c2 > nums.length / 3) ans.push(m2);
  return ans;
};
// TEST
[
  [[], []],
  [[1], [1]],
  [
    [1, 2],
    [1, 2]
  ],
  [[1, 2, 3], []],
  [[1, 2, 2], [2]],
  [[1, 1, 2, 3], [1]],
  [
    [1, 1, 2, 2],
    [1, 2]
  ],
  [
    [1, 2, 2, 3, 2, 1, 1, 3],
    [1, 2]
  ]
].forEach(t => {
  const actual = majorityElement(t[0]);
  console.log('Majority elements of', t[0], '->', actual);
  console.assert(actual.length == t[1].length);
  for (let i = 0; i < actual.length; ++i) {
    console.assert(actual[i] === t[1][i]);
  }
});
