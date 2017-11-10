/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    var linearRob = function(nums) {
        // present minus 1, and present minus 2
        let pm1 = 0, pm2 = 0;
        for (let i = 0, len = nums.length; i < len; ++i) {
            let p = Math.max(pm2 + nums[i], pm1);
            pm2 = pm1;
            pm1 = p;
        }
        return pm1;
    };
    let len = nums.length;
    if (len === 0) { return 0; }
    if (len === 1) { return nums[0]; }
    return Math.max( linearRob(nums.slice(0, len - 1)), 
                     linearRob(nums.slice(1, len)) );
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
    console.log("Max robbed amount of circle", test, "->", rob(test));
});
