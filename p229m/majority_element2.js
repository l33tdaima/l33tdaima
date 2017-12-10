/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
    if (nums == null || nums.length === 0) {
        return [];
    }
    let m1 = null, m2 = null;
    let c1 = 0, c2 = 0;
    let len = nums.length;
    for (let i = 0, len = nums.length; i < len; ++i) {
        if (nums[i] === m1) {
            c1 ++;
        } else if (nums[i] === m2) {
            c2 ++;
        } else if (c1 === 0) {
            m1 = nums[i]; c1 = 1;
        } else if (c2 === 0) {
            m2 = nums[i]; c2 = 1;
        } else {
            c1 --; c2 --;
        }
        //console.log(nums[i]+": m1 =", m1, ", c1 =", c1, "; m2 =", m2, ", c2 =", c2);
    }
    // verify
    c1 = 0, c2 = 0;
    for (let i = 0; i < len; ++i) {
        if (nums[i] === m1) c1++;
        else if (nums[i] === m2) c2++;
    }
    let res = [];
    if (c1 > len / 3) res.push(m1);
    if (c2 > len / 3) res.push(m2);
    return res;
};
// TEST
[/* 
    [],
    [1],
    [1,2],
    [1,2,3],
    [1,2,2],
    [1,1,2,3],
    [1,1,2,2],*/
    [1,2,2,3,2,1,1,3]
].forEach(function (test) {
    console.log("Majority elements of", test, "->", majorityElement(test));
});
