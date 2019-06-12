/**
 * Definition for knows()
 *
 * @param {integer} person a
 * @param {integer} person b
 * @return {boolean} whether a knows b
 * var knows = function(a, b) {
 * };
 */
/**
 * @param {function} knows()
 * @return {function}
 */
var solution = function(knows) {
  /**
   * @param {integer} n Total people
   * @return {integer} The celebrity
   */
  // optimized solution
  return function(n) {
    // find the candidate in the first pass
    let candidate = 0;
    for (let i = 1; i < n; ++i) {
      if (knows(candidate, i)) candidate = i;
    }
    for (let i = 0; i < n; ++i) {
      if ((i < candidate && knows(candidate, i)) || !knows(i, candidate))
        return -1;
      if (i > candidate && !knows(i, candidate)) return -1;
    }
    return candidate;
  };
};
// TESTS
[
  {
    graph: [[1, 1, 0], [0, 1, 0], [1, 1, 1]],
    expected: 1
  },
  {
    graph: [[1, 0, 1], [1, 1, 0], [0, 1, 1]],
    expected: -1
  }
].forEach(t => {
  const knows = (a, b) => {
    return t.graph[a][b] === 1;
  };
  const n = t.graph.length;
  const actual = solution(knows)(n);
  console.log('Find the celebrity in', n, 'people ->', actual);
  console.assert(actual === t.expected);
});
