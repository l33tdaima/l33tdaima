/**
 * @param {string} s
 * @return {boolean}
 */
var isNumberRegex = function (s) {
  return (
    s.trim().match(/^[+-]?((\d+\.?\d*)|(\d*\.?\d+))([eE][-+]?\d+)?$/) !== null
  );
};
var isNumber = function (s) {
  s = s.trim();
  if (s.length === 0) return false;

  let [seenNum, seenE, seenD] = [false, false, false];

  for (let i = 0; i < s.length; ++i) {
    switch (s[i]) {
      case '.':
        if (seenD || seenE) return false;
        seenD = true;
        break;
      case 'e':
      case 'E':
        if (seenE || !seenNum) return false;
        [seenE, seenNum] = [true, false];
        break;
      case '+':
      case '-':
        if (i !== 0 && s[i - 1] !== 'e') return false;
        seenNum = false;
        break;
      default:
        if (s[i] < '0' || s[i] > '9') return false;
        seenNum = true;
    }
  }
  return seenNum;
};
// TEST
[
  ['e', false],
  ['123', true],
  [' 123 ', true],
  [' 0 ', true],
  [' 0123 ', true],
  [' 00', true],
  [' -10', true],
  [' -0', true],
  ['123.5', true],
  ['123.0000', true],
  ['-500.777', true],
  ['0.0000001', true],
  ['0.00000', true],
  ['0.', true],
  ['00.5', true],
  ['123e1', true],
  ['1.23e10', true],
  ['0.5e-10', true],
  ['1.0e4.5', false],
  ['0.5e04', true],
  ['12 3', false],
  ['1a3', false],
  ['', false],
  ['     ', false],
  ['.1', true],
  ['.', false],
  ['2e0', true],
  ['+.8', true],
  [' 005047e+6', true],
].forEach(([s, expected]) => {
  const actual = isNumber(s);
  console.log(`${s} is a number -> ${actual}`);
  console.assert(actual === expected && isNumberRegex(s) === expected);
});
