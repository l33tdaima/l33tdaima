/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
  let [i, sign, result] = [0, 1, 0];
  while (str[i] === ' ') i++;
  if (str[i] === '-') {
    sign = -1;
    i++;
  } else if (str[i] === '+') {
    i++;
  }
  for (; i < str.length; ++i) {
    let d = str.charCodeAt(i) - 48;
    if (d >= 0 && d <= 9) result = result * 10 + d;
    else break;
  }
  return Math.max(-2147483648, Math.min(sign * result, 2147483647));
};
// TEST
[
  ['', 0],
  [' -1', -1],
  ['+007', 7],
  [' - 9', 0],
  [' 4546 9090', 4546],
  ['4000000000', 2147483647],
  ['-3000000000', -2147483648]
].forEach(t => {
  let actual = myAtoi(t[0]);
  console.log('atoi(' + t[0] + ') ->', actual);
  console.assert(actual === t[1]);
});
