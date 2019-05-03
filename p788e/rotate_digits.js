/**
 * @param {number} N
 * @return {number}
 */
var rotatedDigits = function(N) {
  const rotatedDigit = [0, 0, 5, -1, -1, 2, 9, -1, 0, 6];
  const isRotateValid = num => {
    let changed = false;
    while (num > 0) {
      let d = num % 10;
      if (rotatedDigit[d] < 0) return false;
      else if (rotatedDigit[d] > 0) changed = true;
      num = (num / 10) | 0;
    }
    return changed;
  };

  let ans = 0;
  for (let n = 1; n <= N; ++n) {
    if (isRotateValid(n)) ans++;
  }
  return ans;
};

var rotatedDigitDP = function(N) {
  /*
  dp[i] = 0, invalid number
  dp[i] = 1, valid and same number
  dp[i] = 2, valid and different number
  */
  let dp = Array.from({ length: N + 1 }, v => 0);
  let ans = 0;
  for (let i = 0; i <= N; ++i) {
    if (i < 10) {
      if (i === 0 || i === 1 || i === 8) dp[i] = 1;
      else if (i === 2 || i === 5 || i === 6 || i === 9) {
        dp[i] = 2;
        ans++;
      }
    } else {
      let [a, b] = [dp[(i / 10) | 0], dp[i % 10]];
      if (a === 1 && b === 1) dp[i] = 1;
      else if (a >= 1 && b >= 1) {
        dp[i] = 2;
        ans++;
      }
    }
  }
  return ans;
};
// TESTS
[
  [0, 0],
  [1, 0],
  [2, 1],
  [3, 1],
  [4, 1],
  [5, 2],
  [6, 3],
  [7, 3],
  [8, 3],
  [9, 4],
  [10, 4],
  [11, 4],
  [12, 5]
].forEach(t => {
  const actual = rotatedDigits(t[0]);
  console.log('# of good rotated digits from 1 to', t[0], '->', actual);
  console.assert(t[1] === actual);
  console.assert(t[1] === rotatedDigitDP(t[0]));
});
