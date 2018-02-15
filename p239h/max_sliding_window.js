/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    let res = [];
    let len = nums.length;
    let deque = []; // store the indices of candidates
    for (let i = 0; i < len; ++i) {
        if (deque.length > 0 && deque[0] < i - (k - 1)) {
            deque.shift();
        }
        while (nums[deque[deque.length - 1]] < nums[i]) {
            deque.pop();
        }
        deque.push(i);
        if (i >= k - 1) {
            res.push(nums[deque[0]]);
        }
    }
    return res;
};
//TEST
[
    [[], 1],
    [[0], 1],
    [[1,3,-1,-3,5,3,6,7], 3],
].forEach((test) => {
    console.log("Maximums of sliding window of", test[1],
                "in", test[0], "->",
                maxSlidingWindow(test[0], test[1]));
});
