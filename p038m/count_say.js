/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
  if (n === 1) return '1';
  let prev = countAndSay(n - 1);
  let curr = '';
  for (let i = 0, count = 1; i < prev.length; ++i) {
    c = prev[i];
    if (c === prev[i + 1]) {
      // when out of bound, hence undefined, will print the last count
      count++;
    } else {
      curr = curr + (count + c);
      count = 1;
    }
  }
  return curr;
};

console.log(
  'Count and Say of',
  process.argv[2],
  ':',
  countAndSay(parseInt(process.argv[2]))
);
