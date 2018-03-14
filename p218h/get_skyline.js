/**
 * @param {number[][]} buildings
 * @return {number[][]}
 */
var getSkylineV1 = function(buildings) {
    if (buildings.length === 0) { return []; }
    let skyline = [];
    let heightMap = Array.from({length: buildings[buildings.length - 1][1]}, v => 0);
    for (let i = 0, len = buildings.length; i < len; ++i) {
        for (let k = heightMap.length; k <= buildings[i][1] + 1; ++k) {
            heightMap.push(0);
        }
        for (let j = buildings[i][0]; j <= buildings[i][1]; ++j) {
            heightMap[j] = Math.max(heightMap[j], buildings[i][2]);
        }
    }
    //heightMap.forEach((v,k) => { console.log(k, v); });
    let c = 0;
    while (heightMap[c] === 0) { ++c; }
    for (let len = heightMap.length; c < len; ++c) {
        if (c === 0) {
            skyline.push([c, heightMap[c]]); continue;
        }
        if (heightMap[c] > heightMap[c - 1]) {
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

var getSkylineV2 = function(buildings) {
    // 1. Extract and sort the critial points
    let criticalPoints = [];
    for (let i = 0, len = buildings.length; i < len; ++i) {
        criticalPoints.push([buildings[i][0], -buildings[i][2]]); // L
        criticalPoints.push([buildings[i][1], buildings[i][2]]); // R
    }
    criticalPoints.sort((a, b) => {
        if (a[0] !== b[0]) {
            return a[0] - b[0];
        } else {
            return a[1] - b[1];
        }
    });
    // console.log(criticalPoints);

    let skyline = [];
    // 2. Scan the critical points
    let heap = new pq.PriorityQueue(pq.max_first);
    heap.push(0);
    let prevh = 0;
    for (let i = 0, len = criticalPoints.length; i < len; ++i) {
        if (criticalPoints[i][1] < 0) {
            heap.push(-criticalPoints[i][1]);
        } else { // 'R'
            heap.pull(criticalPoints[i][1]);
        }
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
    [ [0, 2, 3], [2, 5, 3]],
    [ [0, 1, 3] ],
    [ [2, 9, 10], [3, 7, 15], [5, 12, 12], [15, 20, 10], [19, 24, 8] ],
].forEach(t => {
    console.log("Skyline of", t, "->");
    console.log("  ", getSkylineV2(t));
    console.log("======");
});
