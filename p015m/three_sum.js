/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    let sol = [];
    if (nums.length < 3) { return sol; }
    nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length - 2; ++i) {
        let lo = i + 1;
        let hi = nums.length - 1;
        while (lo < hi) {
            if (nums[i] + nums[lo] + nums[hi] === 0) {
                sol.push([nums[i], nums[lo], nums[hi]]);
                // avoid duplicates on the second element
                while (lo < hi && nums[lo] === nums[lo + 1]) {
                    lo++;
                }
                // avoid duplicates on the third element
                while (lo < hi && nums[hi] === nums[hi - 1]) {
                    hi--;
                }
                lo++; hi--;
            } else if (nums[i] + nums[lo] + nums[hi] < 0) {
                lo++;
            } else {
                hi--;
            }
        }
        // avoid duplicates on the first element
        while (i < nums.length - 2 && nums[i] === nums[i + 1]) {
            i++;
        }
    }
    return sol;
};
// TEST
[
    [0],
    [0, 0, 0],
    [0, 1, -1, -1, 0, 1, 2, -1, -4],
    [-4, -2, -2, -2, 0, 1, 2, 2, 2, 3, 3, 4, 4, 6, 6]
].forEach((test) => {
    console.log("Solutions of 3 sum for", test, "->");
    var sol = threeSum(test);
    sol.forEach(function (val, index) {
        console.log("  ", index, ": ", val);
    }, this);
    console.log("-------\n");
}, this);
