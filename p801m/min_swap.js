/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */
var minSwapBacktracking = function(A, B) {
    // Swap the i-th element of A and B
    const swap = function(i) {
        let tmp = A[i]; A[i] = B[i]; B[i] = tmp;
    };
    let ans = Number.MAX_SAFE_INTEGER;
    /**
     * 
     * @param {Number} i working index
     * @param {Number} c min count of swap
     */
    const recBTHelper = function(i, c) {
        if (c >= ans) { return; }
        if (i === A.length) {
            ans = Math.min(ans, c);
            return;
        }
        if (A[i-1] < A[i] && B[i-1] < B[i]) {
            recBTHelper(i + 1, c);
        }
        // We should also try the follow case involving swap
        if (A[i-1] < B[i] && B[i-1] < A[i]) {
            swap(i);
            recBTHelper(i + 1, c + 1);
            swap(i);
        }
    };

    recBTHelper(1, 0);
    return ans;
};
var minSwapDP = function(A, B) {
    console.assert(A.length === B.length);
    let len = A.length;
    if (len === 0) { return 0; }
    let swap = Array.from({length: len}, v => Number.MAX_SAFE_INTEGER);
    let keep = Array.from(swap);
    keep[0] = 0, swap[0] = 1;
    for (let i = 1; i < len; ++i) {
        if (A[i-1] < A[i] && B[i-1] < B[i]) {
            keep[i] = keep[i-1]; // no swap needed
            swap[i] = swap[i-1] + 1; // swap both i and i-1
        }
        if (A[i-1] < B[i] && B[i-1] < A[i]) {
            keep[i] = Math.min(keep[i], swap[i-1]); // swap i-1, but not i
            swap[i] = Math.min(swap[i], keep[i-1] + 1); // swap i, but not i-1
        }
    }
    return Math.min(keep[len - 1], swap[len - 1]);
};
// TEST
[
    [[1,3,5,4], [1,2,3,7]],
].forEach(t => {
    console.log("Min swap between", t, "->", 
                minSwapDP(t[0], t[1]),
                minSwapBacktracking(t[0], t[1]));
});