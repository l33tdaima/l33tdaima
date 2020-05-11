/**
 * @param {number} N
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function (N, trust) {
  let candidates = Array.from({ length: N + 1 }, (v) => 0);
  for (let t of trust) {
    candidates[t[0]] -= 1; // automatically disqualifies by breaking rule #1
    candidates[t[1]] += 1;
  }
  for (let n = 1; n <= N; ++n) {
    if (candidates[n] === N - 1) return n;
  }
  return -1;
};
// TESTS
[
  {
    N: 2,
    trust: [[1, 2]],
    expected: 2,
  },
  {
    N: 3,
    trust: [
      [1, 3],
      [2, 3],
    ],
    expected: 3,
  },
  {
    N: 3,
    trust: [
      [1, 3],
      [2, 3],
      [3, 1],
    ],
    expected: -1,
  },
  {
    N: 3,
    trust: [
      [1, 2],
      [2, 3],
    ],
    expected: -1,
  },
  {
    N: 4,
    trust: [
      [1, 3],
      [1, 4],
      [2, 3],
      [2, 4],
      [4, 3],
    ],
    expected: 3,
  },
].forEach((t) => {
  const actual = findJudge(t.N, t.trust);
  console.log('The town judge of N =', t.N, '->', actual);
  console.assert(t.expected === actual);
});
