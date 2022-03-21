/**
 * @param {string} S
 * @return {number[]}
 */
var partitionLabels = function (S) {
  const ans = [];
  // the index of last occurrence of each letter
  let lastOccurs = Array.from({ length: 26 }, (v) => -1);
  for (let i = 0; i < S.length; ++i) lastOccurs[S.charCodeAt(i) - 97] = i;
  let [start, last] = [0, -1];
  for (let i = 0; i < S.length; ++i) {
    last = Math.max(last, lastOccurs[S.charCodeAt(i) - 97]);
    if (i === last) {
      ans.push(last - start + 1);
      start = i + 1;
    }
  }
  return ans;
};
// TEST
[
  ['abc', [1, 1, 1]],
  ['abca', [4]],
  ['zzcbzchfihi', [6, 5]],
  ['abcdaefghijek', [5, 7, 1]],
  ['ababcbacadefegdehijhklij', [9, 7, 8]],
  ['qiejxqfnqceocmy', [13, 1, 1]],
].forEach(([s, expected]) => {
  const actual = partitionLabels(s);
  console.log('Partition labels of', s, '->', actual);
  console.assert(actual.toString() === expected.toString());
});
