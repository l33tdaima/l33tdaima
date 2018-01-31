/**
 * @param {number} n
 * @return {number[][]}
 */
var getFactors = function(n) {
    /**
     * @param {number} n
     * @param {number} start: starting number of iteration
     * @return {number[][]}
     */
    let recGetFactors = function(n, start) {
        let results = new Array();
        // set upper bound to sqrt(n) speed up 5x
        for (let i = start; i*i <= n; ++i) { 
            if (n % i !== 0) { continue; }
            let f = n / i;
            // push the unfactorized factor
            if (f >= i) {
                results.push([i, f]);
            }
            // recursion
            let subfactors = recGetFactors(f, i);
            /* slower but neat
            Array.prototype.push.apply(
                results, 
                subfactors.map((v) => [i].concat(v))
            );*/
            for (let j = 0, len = subfactors.length; j < len; ++j) {
                subfactors[j].unshift(i);
                results.push(subfactors[j]);
            }
        }
        return results;
    };
    return recGetFactors(n, 2);
};
// TEST
[
    1, 37, 4, 6, 12, 32,
].forEach(function (test) {
    console.log("Get factors of", test, "->");
    console.log("", getFactors(test));
});
