/**
 * @param {number[][]} rooms
 * @return {void} Do not return anything, modify rooms in-place instead.
 */
var wallsAndGates = function(rooms) {
    const WALL = 0, GATE = -1;
    const rows = rooms.length;
    if (rows === 0) { return; }
    cols = rooms[0].length;
    const queue = new Array();
    for (let i = 0; i < rows; ++i) {
        for (let j = 0; j < cols; ++j) {
            if (rooms[i][j] === WALL) { queue.push([i, j]); }
        }
    }
    const dirs = [[-1, 0], [ 0, 1], [ 1, 0], [ 0,-1]];
    while (queue.length > 0) {
        let cur = queue.shift();
        let i = cur[0], j = cur[1];
        for (d of dirs) {
            let ni = i + d[0]; // next row index
            let nj = j + d[1]; // next col index
            if (ni >= 0 && ni < rows && nj >= 0 && nj < cols &&
                rooms[ni][nj] !== GATE &&
                rooms[i][j] + 1 < rooms[ni][nj]) {
                rooms[ni][nj] = rooms[i][j] + 1;
                queue.push([ni, nj]);
            }
        }
    }
};
const INF = 2147483647;
// TEST
[
    [],
    [[INF]],
    [[INF, 0]],
    [[0], [INF]],
    [
        [INF,  -1,   0, INF],
        [INF, INF, INF,  -1],
        [INF,  -1, INF,  -1],
        [  0,  -1, INF, INF]
    ],
].forEach(t => {
    console.log("Wall and gates answer ->");
    wallsAndGates(t);
    console.log(t);
});
