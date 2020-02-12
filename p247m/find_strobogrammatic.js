/**
 * @param {number} n
 * @return {string[]}
 */
const anyChoices = {
  '0': '0',
  '1': '1',
  '6': '9',
  '8': '8',
  '9': '6'
};
var findStrobogrammatic = function(n) {
  const ans = [];
  const recHelper = function(wip) {
    if (wip.length === n) {
      if (n === 1 || wip[0] !== '0') {
        // a valid number should not start with 0
        ans.push(wip);
      }
      return;
    }
    for (let c in anyChoices) {
      recHelper(`${c}${wip}${anyChoices[c]}`);
    }
  };

  let base = [''];
  if (n % 2 !== 0) base = ['0', '1', '8'];
  for (let b of base) recHelper(b);
  return ans;
};
// TEST
[0, 1, 2, 3, 4].forEach(t => {
  console.log('Find strobogrammtic of length', t, '->', findStrobogrammatic(t));
});
