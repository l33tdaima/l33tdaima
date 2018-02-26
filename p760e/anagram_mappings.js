/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var anagramMappings = function(A, B) {
    let map = new Map();
    let res = [];
    for (let i = 0, len = B.length; i < len; ++i) {
        map.set(B[i], i);
    }
    for (let j = 0, len = A.length; j < len; ++j) {
        res.push(map.get(A[j]));
    }
    return res;
};
// TEST
[
    {
        A: [12, 28, 46, 32, 50],
        B: [50, 12, 32, 46, 28]
    },
].forEach(test => {
    console.log("Anagram mappings ->",
                anagramMappings(test.A, test.B));
});
