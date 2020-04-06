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
    if (v === undefined) {
      sigMap.set(sig, [s]);
    } else {
      v.push(s);
      sigMap.set(sig, v);
    }
  }
  // grouping
  const ans = [];
  sigMap.forEach((v) => ans.push(v));
  return ans;
};

[['eat', 'tea', 'tan', 'ate', 'nat', 'bat', 'a', 'a', '', '']].forEach((t) => {
  console.log('Grouping results ->\n', groupAnagrams(t));
});
