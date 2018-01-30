/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var canPartitionKSubsets = function(nums, k) {
    let len = nums.length;
    let sum = nums.reduce((acc, cur) => acc + cur, 0);
    if (k <= 0 || ~~(len / k) === 0 || sum % k !== 0) { return false; }
    
    let target = sum / k;
    // Sort in descending order
    nums.sort((a, b) => b - a); 
    // State array recording whether the element been used in partition or not
    let used = Array.from({length: len}, (v) => false);
    console.log("| nums =", nums);
    /**
     * Helper function to backtrace
     * @param {number} startIndex: index to start in nums
     * @param {number} parK: # of partition to do
     * @param {number} accSum: accumulated sum so far
     * @param {number} accNum: accumulated number of contributed element
     * @return Can partition or not
     */
    let recCanPartition = function(startIndex, parK, accSum, accNum) {
        // BEGIN TRACE
        let padding = "|";
        for (let j = 0; j <= k - parK; ++j) { padding += "_ "; }
        console.log(padding + "startIndex=" + startIndex + " parK=" + parK + " accSum=" + accSum + " accNum=" + accNum);
        console.log("| used =", used.map((v) => v ? 1 : 0));
        // END TRACE
        if (parK === 1) { return true; }
        if (accSum === target) {
            // found one partition, keep searching for the next one
            return recCanPartition(0, parK - 1, 0, 0);
        }
        for (let i = startIndex; i < len; ++i) {
            if (used[i]) { continue; }
            if (accSum + nums[i] > target) { continue; }
            used[i] = true;
            if (recCanPartition(i + 1, parK, accSum + nums[i], accNum++)) {
                return true;
            }
            used[i] = false;
        }
        return false;
    }
    return recCanPartition(0, k, 0, 0);
};
// TEST
[
    [[1,2,3], 4],
    [[1,3,4], 3],
    [[1,2,3], 2],
    [[4, 3, 2, 3, 5, 2, 1], 4],
].forEach(function (test) {
    console.log("Can partition", test[0], "into", test[1], "subsets?");
    console.log("->", canPartitionKSubsets(test[0], test[1]));
});
