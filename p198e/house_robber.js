/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    // present minus 1, and present minus 2
    let pm1 = 0, pm2 = 0;
    for (let i = 0, len = nums.length; i < len; ++i) {
        let p = Math.max(pm2 + nums[i], pm1);
        pm2 = pm1;
        pm1 = p;
    }
    return pm1;
};

[
    [],
    [1],
    [1,2],
    [2,1],
    [1,5,3],
    [1,3,3],
    [5,2,2,1],
    [2,5,2,1],
    [3,2,4,2]
].forEach(function (test) {
    console.log("Max robbed amount of", test, "->", rob(test));
});
