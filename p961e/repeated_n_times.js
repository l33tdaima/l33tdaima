/**
 * @param {number[]} A
 * @return {number}
 */
var repeatedNTimes = function(A) {
  const ht = new Set();
  for (let a of A) {
    if (ht.has(a)) return a;
    ht.add(a);
  }
  console.assert(false, 'Invalid input');
};
[
  [[1, 2, 3, 3], 3],
  [[2, 1, 2, 5, 3, 2], 2],
  [[5, 1, 5, 2, 5, 3, 5, 4], 5],
  [[9, 5, 6, 9], 9]
].forEach(t => {
  const actual = repeatedNTimes(t[0]);
  console.log('The element repeated N times in', t[0], '->', actual);
  console.assert(actual === t[1]);
});
