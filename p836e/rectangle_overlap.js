/**
 * @param {number[]} rec1
 * @param {number[]} rec2
 * @return {boolean}
 */
var isRectangleOverlap = function(rec1, rec2) {
  if (
    rec2[1] >= rec1[3] || // p2 is above p1 w|o overlap
    rec2[0] >= rec1[2] // p2 is right p1 w|o overlap
  ) {
    return false;
  } else if (
    rec1[1] >= rec2[3] || // p1 is above p2 w|o overlap
    rec1[0] >= rec2[2] // p1 is right p2 w|o overlap
  ) {
    return false;
  } else {
    return true;
  }
};
// TESTS
[
  {
    rec1: [0, 0, 2, 2],
    rec2: [1, 1, 3, 3],
    expected: true
  },
  {
    rec1: [0, 0, 1, 1],
    rec2: [1, 0, 2, 1],
    expected: false
  },
  {
    rec1: [8, 20, 12, 20],
    rec2: [14, 2, 19, 11],
    expected: false
  }
].forEach(t => {
  const actual = isRectangleOverlap(t.rec1, t.rec2);
  console.log("Is rectangle", t.rec1, t.rec2, "overlap? =>", actual);
  console.assert(actual === t.expected);
});
