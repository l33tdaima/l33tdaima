/**
 * Definition for knows()
 * 
 * @param {integer} person a
 * @param {integer} person b
 * @return {boolean} whether a knows b
 * var knows = function(a, b) {
 * };
 */
/**
 * @param {function} knows()
 * @return {function}
 */
var brutalForce = false;
var solution = function(knows) {
    /**
     * @param {integer} n Total people
     * @return {integer} The celebrity
     */
  if (brutalForce) {
    // brutal force with early termination
    return function(n) {
        for (let i = 0; i < n; ++i) {
            // is i a celebrity because of she knows no one?
            let j = 0;
            while (j < n) {
                if (i !== j && knows(i, j)) {
                    break;
                }
                j++;
            }
            if (j < n) { continue; }
            // test if she is known by all
            for (j = 0; j < n; ++j) {
                if (i !== j && !knows(j, i)) {
                    break;
                }
            }
            if (j === n) { return i; }
        }
        return -1;
    };
  } else {
    // optimized solution
    return function (n) {
        // find the candidate in the first pass
        let candidate = 0;
        for (let i = 1; i < n; ++i) {
            if (knows(candidate, i)) {
                candidate = i;
            }
        }
        for (let i = 0; i < n; ++i) {
            if (i < candidate && knows(candidate, i) || !knows(i, candidate)) return -1;
            if (i > candidate && !knows(i, candidate)) return -1;
        }
        return candidate;
    };
  }
};
// TEST
[
    2,
    3,
    10,
].forEach(function (test) {
    let knows = function(a, b) {
        if (b === test - 1) return true;
        if (a === test - 1) return false;
        return true;
    };
    console.log("Find the celebrity in", test, "->",
                solution(knows)(test));
});
