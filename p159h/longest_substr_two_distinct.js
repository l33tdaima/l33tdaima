/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstringTwoDistinct = function(s) {
    let map = Array.from({length: 128}, (v) => 0);

    let maxLen = 0, maxStart = 0;
    let start = 0, counter = 0;
    for (let end = 0; end < s.length; ++end) {
        // move end pointer and update hashmap's char occurences
        if (map[s.charCodeAt(end)]++ === 0) {
            counter ++;
        }

        // until the counter exceeding 2, then we move start to drop the counter
        while (counter > 2) {
            if (map[s.charCodeAt(start)]-- === 1) {
                counter --;
            }
            start ++;
        }

        // update the max
        if (end - start + 1 > maxLen) {
            maxLen = end - start + 1;
            maxStart = start;
        }        
    }
    console.log("[DEBUG] Longest Substring:", s.slice(maxStart, maxStart + maxLen));
    return maxLen;
};

var tests = [
    "eceba",
    "CCCCC",
    "abcde",
    "CODEaaaabbbbcde",

];
tests.forEach(function(s) {
    console.log(s + ": ", lengthOfLongestSubstringTwoDistinct(s));
});
