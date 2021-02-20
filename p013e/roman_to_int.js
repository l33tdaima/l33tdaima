/**
 * @param {string} s
 * @return {number}
 */
const VALUE_MAP = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

var romanToInt = function (s) {
  let ans = 0;
  for (i = 0; i < s.length; ++i) {
    let [curr, next] = [VALUE_MAP[s[i]], VALUE_MAP[s[i + 1]] || 0];
    if (curr < next) ans -= curr;
    else ans += curr;
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
  ['MCMXCIV', 1994],
].forEach(([s, expected]) => {
  const actual = romanToInt(s);
  console.log('Roman', s, 'to int ->', actual);
  console.assert(actual === expected);
});
