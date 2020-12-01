/**
 * @param {number[][]} buildings
 * @return {number[][]}
 */
var getSkylineV1 = function (buildings) {
  if (buildings.length === 0) return [];
  let skyline = [];
  let heightMap = Array.from(
    { length: buildings[buildings.length - 1][1] + 2 },
    (v) => 0
  );
  for (let b of buildings) {
    for (let j = b[0]; j <= b[1]; ++j) {
      heightMap[j] = Math.max(heightMap[j], b[2]);
    }
  }
  let c = 0;
  while (heightMap[c] === 0) ++c;
  for (; c < heightMap.length; ++c) {
    if (c === 0) {
      skyline.push([c, heightMap[c]]);
    } else if (heightMap[c] > heightMap[c - 1]) {
      skyline.push([c, heightMap[c]]);
    } else if (heightMap[c] < heightMap[c - 1]) {
      skyline.push([c - 1, heightMap[c]]);
    }
  }
  return skyline;
};
/**
 * @param {number[][]} buildings
 * @return {number[][]}
 */
const pq = require('priority_queue');

var getSkylineV2 = function (buildings) {
  // 1. Extract and sort the critial points
  let criticalPoints = [];
  for (let b of buildings) {
    criticalPoints.push([b[0], -b[2]]); // negative for L
    criticalPoints.push([b[1], b[2]]); // positive for R
  }
  criticalPoints.sort((a, b) => {
    if (a[0] !== b[0]) return a[0] - b[0];
    else return a[1] - b[1];
  });
  console.log(criticalPoints);

  let skyline = [];
  // 2. Scan the critical points
  let heap = new pq.PriorityQueue(pq.max_first);
  heap.push(0);
  let prevh = 0;
  for (let i = 0; i < criticalPoints.length; ++i) {
    if (criticalPoints[i][1] < 0) heap.push(-criticalPoints[i][1]);
    else heap.pull(criticalPoints[i][1]);

    let h = heap.top();
    if (h !== prevh) {
      skyline.push([criticalPoints[i][0], h]);
      prevh = h;
    }
  }
  return skyline;
};

// TEST
[
  [
    [
      [0, 2, 3],
      [2, 5, 3],
    ],
    [
      [0, 3],
      [5, 0],
    ],
  ],
  [
    [[0, 1, 3]],
    [
      [0, 3],
      [1, 0],
    ],
  ],
  [
    [
      [2, 9, 10],
      [3, 7, 15],
      [5, 12, 12],
      [15, 20, 10],
      [19, 24, 8],
    ],
    [
      [2, 10],
      [3, 15],
      [7, 12],
      [12, 0],
      [15, 10],
      [20, 8],
      [24, 0],
    ],
  ],
].forEach(([buildings, expected]) => {
  const actual = getSkylineV1(buildings);
  console.log('Skyline of', buildings, '->', actual);
  console.assert(actual.toString() === expected.toString());
  console.assert(getSkylineV2(buildings).toString() === expected.toString());
});
