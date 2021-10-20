/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
  // Convert the input edges into an adjacency list of x depends on y
  const graph = Array.from({ length: numCourses }, (v) => []);
  for (let e of prerequisites) graph[e[0]].push(e[1]);

  // 0: not visited, 1: visited, -1: being visited, if found -1 again on dfs path, it is a ring
  const visit = Array.from({ length: numCourses }, (v) => 0);
  // DFS helper function
  let recHasCycleDFS = function (v) {
    if (visit[v] === -1) return true;
    if (visit[v] === 1) return false;
    visit[v] = -1;
    for (let j of graph[v]) {
      if (recHasCycleDFS(j)) return true;
    }
    visit[v] = 1; // output v for topological sort
    return false;
  };

  for (let i = 0; i < numCourses; ++i) {
    if (recHasCycleDFS(i)) return false;
  }
  return true;
};
// TEST
[
  [1, [], true],
  [2, [[0, 1]], true],
  [
    2,
    [
      [0, 1],
      [1, 0],
    ],
    false,
  ],
  [
    4,
    [
      [0, 1],
      [1, 2],
      [3, 1],
    ],
    true,
  ],
  [
    4,
    [
      [0, 1],
      [1, 2],
      [2, 0],
      [3, 1],
    ],
    false,
  ],
].forEach(([numCourses, prerequisites, expected]) => {
  actual = canFinish(numCourses, prerequisites);
  console.log(
    'Can finish',
    numCourses,
    'courses with prerequisites',
    prerequisites,
    '->',
    actual
  );
  console.assert(actual === expected);
});
