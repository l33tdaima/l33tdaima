/**
 * @param {number[]} commands
 * @param {number[][]} obstacles
 * @return {number}
 */
const DIR = [
  [0, 1], // north
  [1, 0], // east
  [0, -1], // south
  [-1, 0] // west
];
var robotSim = function(commands, obstacles) {
  const obSet = new Set();
  for (let ob of obstacles) {
    obSet.add(ob.toString());
  }
  let pos = [0, 0];
  let di = 0;
  let ans = 0;
  for (let cmd of commands) {
    if (cmd === -1) {
      // turn right
      di = (di + 1) % 4;
    } else if (cmd === -2) {
      // turn left
      di = (di + 3) % 4;
    } else {
      for (let i = 1; i <= cmd; ++i) {
        let [x, y] = [pos[0] + DIR[di][0], pos[1] + DIR[di][1]];
        if (obSet.has([x, y].toString())) break;
        pos = [x, y];
        ans = Math.max(ans, x * x + y * y);
      }
    }
  }
  return ans;
};
// TESTS
[
  {
    commands: [4, -1, 3],
    obstacles: [],
    expected: 25
  },
  {
    commands: [4, -1, 4, -2, 4],
    obstacles: [[2, 4]],
    expected: 65
  }
].forEach(t => {
  const actual = robotSim(t.commands, t.obstacles);
  console.log(
    "The square of the Euclidean distance after simulation ->",
    actual
  );
});
