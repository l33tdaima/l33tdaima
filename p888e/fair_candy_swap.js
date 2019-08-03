/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var fairCandySwap = function(A, B) {
  const sumA = A.reduce((prev, a) => prev + a, 0);
  const sumB = B.reduce((prev, b) => prev + b, 0);
  const setB = new Set(B);
  for (let a of A) {
    let target = a + (sumB - sumA) / 2;
    if (setB.has(target)) {
      return [a, target];
    }
  }
};
// TESTS
[
  {
    A: [1, 1],
    B: [2, 2],
    expected: [1, 2]
  },
  {
    A: [1, 2],
    B: [2, 3],
    expected: [1, 2]
  },
  {
    A: [2],
    B: [1, 3],
    expected: [2, 3]
  },
  {
    A: [1, 2, 5],
    B: [2, 4],
    expected: [5, 4]
  }
].forEach(({ A, B, expected }) => {
  const actual = fairCandySwap(A, B);
  console.log('Fair candy swap between', A, 'and', B, '->', actual);
  console.assert(actual[0] === expected[0] && actual[1] === expected[1]);
});
