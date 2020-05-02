/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function (J, S) {
  const jset = new Set(J);
  return S.split('').reduce((x, s) => {
    if (jset.has(s)) return x + 1;
    else return x;
  }, 0);
};
// TEST
[
  ['z', 'ZZ', 0],
  ['aA', 'aAAbbbb', 3],
].forEach((t) => {
  const actual = numJewelsInStones(t[0], t[1]);
  console.log('# of jewels', t[0], ' in stones', t[1], '->', actual);
  console.assert(actual === t[2]);
});
