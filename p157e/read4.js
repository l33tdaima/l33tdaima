/**
 * Definition for read4()
 *
 * @param {character[]} buf Destination buffer
 * @return {number} The number of characters read
 */
const file = '123456789'.split('');
let p = 0;
const read4 = function(buf) {
  let i = 0;
  while (p < file.length && i < 4) {
    buf[i++] = file[p++];
  }
  return i;
};

/**
 * @param {function} read4()
 * @return {function}
 */
var solution = function(read4) {
  /**
   * @param {character[]} buf Destination buffer
   * @param {number} n Maximum number of characters to read
   * @return {number} The number of characters read
   */
  return function(buf, n) {
    let [total, eof] = [0, false];
    let buf4 = [];
    while (!eof && total < n) {
      let nc = read4(buf4);
      eof = nc < 4;
      nc = Math.min(nc, n - total);
      total += nc;
      for (let i = 0; i < nc; ++i) {
        buf.push(buf4[i]);
      }
    }
    return total;
  };
};
// TEST
[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].forEach(t => {
  let buf = [];
  console.log(
    'Read',
    t,
    'chars from file content',
    file,
    '->',
    solution(read4)(buf, t)
  );
  console.log('Buffer ->', buf);
  p = 0; // reset
});
