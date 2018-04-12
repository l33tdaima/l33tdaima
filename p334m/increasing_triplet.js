/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
    let t1 = Number.MAX_SAFE_INTEGER, t2 = Number.MAX_SAFE_INTEGER;
    for (let num of nums) {
        if (num <= t1) {
            t1 = num;
        } else if (num <= t2) {
            t2 = num;
        } else {
            return true;
        }
    }
    return false;
};
// TEST
[
    [1],
    [1,4],
    [1,4,2],
    [1,2,3,4,5],
    [5,4,3,2,1],
    [3,2,1,4,2,3],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,10,0,0,0,10000],
].forEach(t => {
    console.log("An increasing subsequence of length 3 exists in", t, "->",
                increasingTriplet(t));
});
