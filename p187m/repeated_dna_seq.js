/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function (s) {
  const [seen, repeated] = [new Set(), new Set()];
  for (let i = 0; i + 9 < s.length; ++i) {
    let ten = s.substring(i, i + 10);
    if (seen.has(ten)) repeated.add(ten);
    else seen.add(ten);
  }
  return Array.from(repeated);
};
// TEST
['AAAAAAAAAAA', 'AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT'].forEach((s) => {
  console.log('Repeated DNA Sequence in', s, '->', findRepeatedDnaSequences(s));
});
