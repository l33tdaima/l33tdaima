/**
 * @param {number[][]} rooms
 * @return {void} Do not return anything, modify rooms in-place instead.
 */
const [WALL, GATE] = [-1, 0];
const DIRS = [[-1, 0], [0, 1], [1, 0], [0, -1]];
var wallsAndGates = function(rooms) {
  const rows = rooms.length;
  if (rows === 0) return;
  const queue = new Array();
  for (let i = 0; i < rows; ++i) {
    for (let j = 0; j < rooms[i].length; ++j) {
      if (rooms[i][j] === GATE) queue.push([i, j]);
    }
  }
  while (queue.length > 0) {
    let cur = queue.shift();
    let [i, j] = cur;
    for (d of DIRS) {
      let [ni, nj] = [i + d[0], j + d[1]]; // next col index
      if (
        ni >= 0 &&
        ni < rows &&
        rooms[ni][nj] &&
        rooms[ni][nj] !== WALL &&
        rooms[i][j] + 1 < rooms[ni][nj]
      ) {
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
    [INF, -1, 0, INF],
    [INF, INF, INF, -1],
    [INF, -1, INF, -1],
    [0, -1, INF, INF]
  ]
].forEach(t => {
  console.log('Wall and gates answer ->');
  wallsAndGates(t);
  console.log(t);
});
