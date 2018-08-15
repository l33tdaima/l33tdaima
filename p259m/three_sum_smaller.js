/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumSmaller = function(nums, target) {
    let ans = 0;
    if (nums.length < 3) { return ans; }
    
    nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length - 2; ++i) {
        let lo = i + 1;
        let hi = nums.length - 1;
        while (lo < hi) {
            if (nums[i] + nums[lo] + nums[hi] < target) {
                ans += hi - lo;
                lo ++;
            } else {
                hi --;
            }
        }
    }
    return ans;
};
// TEST
[
    {
        nums: [3,1,0,-2],
        target: 4,
        expected: 3
    },
    {
        nums: [-2,0,1,3],
        target: 2,
        expected: 2
    },
].forEach(t => {
    let actual = threeSumSmaller(t.nums, t.target);
    console.log("# of triplets in", t.nums, "less than", t.target,
                "->", actual);
    console.assert(actual === t.expected);
});
