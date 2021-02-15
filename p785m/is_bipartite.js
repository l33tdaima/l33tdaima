/**
 * @param {number[][]} graph
 * @return {boolean}
 */
var isBipartite = function (graph) {
  const party = Array.from({ length: graph.length });
  // indicate which group, T or F a node belongs to
  // if undefined means not visited yet
  for (let i in graph) {
    if (party[i] !== undefined) continue;
    // BFS traverse
    party[i] = true;
    let bfsQueue = [i];
    while (bfsQueue.length > 0) {
      let u = bfsQueue.shift();
      for (let v of graph[i]) {
        if (party[v] !== undefined) {
          if (party[v] === party[u]) return false;
        } else {
          bfsQueue.push(v);
          party[v] = !party[u];
        }
      }
    }
  }
  return true;
};
// TEST
[
  [
    [
      [1, 2, 3],
      [0, 2],
      [0, 1, 3],
      [0, 2],
    ],
    false,
  ],
  [
    [
      [1, 3],
      [0, 2],
      [1, 3],
      [0, 2],
    ],
    true,
  ],
  [[[3], [2, 4], [1], [0, 4], [1, 3]], true],
  [[[1], [0, 3], [3], [1, 2]], true],
  [[[1], [0]], true],
  [[[1, 2], [0], [0]], true],
  [
    [
      [1, 2],
      [0, 2],
      [0, 1],
    ],
    false,
  ],
  [
    [
      [],
      [2, 4, 6],
      [1, 4, 8, 9],
      [7, 8],
      [1, 2, 8, 9],
      [6, 9],
      [1, 5, 7, 8, 9],
      [3, 6, 9],
      [2, 3, 4, 6, 9],
      [2, 4, 5, 6, 7, 8],
    ],
    false,
  ],
].forEach(([graph, expected]) => {
  const actual = isBipartite(graph);
  console.log('Is graph', graph, 'bipartite? ->', actual);
  console.assert(actual === expected);
});
