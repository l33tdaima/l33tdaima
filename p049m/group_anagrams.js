/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  // sort each string for signature
  const sigMap = new Map();
  for (let s of strs) {
    let sig = [...s].sort().join('');
    let v = sigMap.get(sig);
    if (v) {
      v.push(s);
      sigMap.set(sig, v);
    } else {
      sigMap.set(sig, [s]);
    }
  }
  // grouping
  const ans = [];
  sigMap.forEach((v) => ans.push(v));
  return ans;
};

[
  [
    ['eat', 'tea', 'tan', 'ate', 'nat', 'bat'],
    [['eat', 'tea', 'ate'], ['tan', 'nat'], ['bat']],
  ],
  [[''], [['']]],
  [['a'], [['a']]],
].forEach(([strs, expected]) => {
  const actual = groupAnagrams(strs);
  console.log('Group anagrams ->', actual);
  console.assert(actual.toString() === expected.toString());
});
