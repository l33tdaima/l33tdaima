/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
  return 1 + ((num - 1) % 9);
};
// TESTS
[11, 8, 1853, 2035].forEach(t => {
  console.log("Digital root of", t, "->", addDigits(t));
});
