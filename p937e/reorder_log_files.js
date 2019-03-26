/**
 * @param {string[]} logs
 * @return {string[]}
 */
var reorderLogFiles = function(logs) {
  const isDigit = s => {
    let c = s[s.indexOf(" ") + 1] - "0";
    return c >= 0 && c <= 9;
  };
  let logsWithIndex = logs.map((v, index) => [v, index]);
  logsWithIndex.sort((a, b) => {
    let isaDigit = isDigit(a[0]);
    let isbDigit = isDigit(b[0]);
    if (!isaDigit && !isbDigit) {
      let [ida, ...lettersa] = a[0].split(" ");
      let [idb, ...lettersb] = b[0].split(" ");
      if (lettersa === lettersb) return ida < idb ? -1 : 1;
      else return lettersa < lettersb ? -1 : 1;
    } else if (isaDigit && isbDigit) {
      return a[1] - b[1]; // preserve the original order
    } else {
      return isaDigit ? 1 : -1;
    }
  });
  return logsWithIndex.map(v => v[0]);
};
// TESTS
[
  ["a1 9 2 3 1", "g1 act car", "zo4 4 7", "ab1 off key dog", "a8 act zoo"],
  [
    "6p tzwmh ige mc",
    "ns 566543603829",
    "ubd cujg j d yf",
    "ha6 1 938 376 5",
    "3yx 97 666 56 5",
    "d 84 34353 2249",
    "0 tllgmf qp znc",
    "s 1088746413789",
    "ys0 splqqxoflgx",
    "uhb rfrwt qzx r",
    "u lrvmdt ykmox",
    "ah4 4209164350",
    "rap 7729 8 125",
    "4 nivgc qo z i",
    "apx 814023338 8"
  ]
].forEach(t => {
  console.log("Reorder log files", t, "->\n  ", reorderLogFiles(t));
});
