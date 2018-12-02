/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
  let ans = [];
  for (let i = 1; i <= n; ++i) {
    if (i % 3 === 0 && i % 5 === 0) {
      ans.push("FizzBuzz");
    } else if (i % 3 === 0) {
      ans.push("Fizz");
    } else if (i % 5 === 0) {
      ans.push("Buzz");
    } else {
      ans.push(i.toString());
    }
  }
  return ans;
};
// TEST
[1, 3, 5, 15].forEach(t => {
  console.log("FizzBuzz of", t, "->", fizzBuzz(t));
});
