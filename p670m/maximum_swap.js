/**
 * @param {number} num
 * @return {number}
 */
var maximumSwap = function(num) {
    // Convert to array
    let nums = []; 
    while (num !== 0) {
        nums.unshift(num % 10);
        num = ~~(num/10);
    }
    // Index the occurrence of each digit
    let ht = Array.from({length: 10}, v => -1);
    let len = nums.length;
    for (let i = 0; i < len; ++i) {
        ht[nums[i]] = i;
    }
    // Scan again to search for swap opportunity
    for (let i = 0; i < len; ++i) {
        for (let d = 9; d > nums[i]; --d) {
            if (ht[d] < 0 || ht[d] <= i) {
                continue;
            }
            // swap the digit in nums and return
            let tmp = nums[i];
            nums[i] = nums[ht[d]];
            nums[ht[d]] = tmp;
            return nums.reduce((p, c) => p * 10 + c, 0);
        }
    }
    return nums.reduce((p, c) => p * 10 + c, 0);
};
// TEST
[
    1,
    89,
    751,
    307,
    1993,
    903797,
].forEach(t => {
    console.log("Maximum number of", t, "after one swap ->",
                maximumSwap(t));
});
