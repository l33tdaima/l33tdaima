/**
 * @param {number[][]} people
 * @return {number[][]}
 */
var reconstructQueue = function (people) {
  people.sort((a, b) => {
    if (a[0] === b[0]) {
      return a[1] - b[1]; // increasing k
    } else {
      return b[0] - a[0]; // decreasing h
    }
  });
  let res = [];
  for (let person of people) {
    // insert into the position using k value
    res.splice(person[1], 0, person);
  }
  return res;
};
// TEST
[
  [],
  [[7, 0]],
  [
    [7, 0],
    [4, 4],
    [7, 1],
    [5, 0],
    [6, 1],
    [5, 2],
  ],
].forEach((t) => {
  console.log('After reconstructing queue ->', reconstructQueue(t));
});
