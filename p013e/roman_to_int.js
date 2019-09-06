/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  const valueMap = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  };
  let ans = 0;
  for (i = 0; i < s.length; ++i) {
    let curr = valueMap[s[i]];
    let next = i + 1 < s.length ? valueMap[s[i + 1]] : 0;
    if (curr < next) {
      ans += next - curr;
      i++;
    } else {
      ans += curr;
    }
  }
  return ans;
};
// TESTS
[
  ['III', 3],
  ['IV', 4],
  ['VII', 7],
  ['IX', 9],
  ['LVIII', 58],
  ['XCIX', 99],
  ['DCCCXC', 890],
  ['MCMXCIV', 1994]
].forEach(t => {
  let actual = romanToInt(t[0]);
  console.log('Roman', t[0], 'to int ->', actual);
  console.assert(actual === t[1]);
});
