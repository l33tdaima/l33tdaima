/**
 * @param {number[]} bits
 * @return {boolean}
 */
var isOneBitCharacter = function(bits) {
  let lastCharIsOne = false;
  for (let i = 0; i < bits.length; ) {
    if (bits[i] === 1) {
      i += 2;
      lastCharIsOne = false;
    } else {
      i++;
      lastCharIsOne = true;
    }
  }
  return lastCharIsOne;
};
// TEST
[
  { bits: [1, 0, 0], expected: true },
  {
    bits: [1, 1, 1, 0],
    expected: false
  }
].forEach(t => {
  let actual = isOneBitCharacter(t.bits);
  console.log("Is the last character of", t.bits, "one bit ->", actual);
});
