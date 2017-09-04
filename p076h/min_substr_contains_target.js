/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    // target to be found map
    // use ascii code as array key over map for better performance
    let tMap = Array.from({length: 128}, (v) => 0);
    for (let i = 0; i < t.length; ++i) {
        tMap[t.charCodeAt(i)] ++;
    }

    let start = 0, counter = t.length; // counter of chars to be matched
    let minStart = 0, minLen = s.length + 1;
    for (let end = 0; end < s.length; ++end) {
        // for char not in t, its entry in tMap goes negative
        // for char in t, its entry in tMap entry goes to zero
        if (tMap[s.charCodeAt(end)] -- > 0) {
            counter --;
        }

        // after found a match, move start pointer for a smaller window
        while (counter === 0) {
            // update the min window len
            if (end - start < minLen) {
                minLen = end - start + 1;
                minStart = start;
            }
            // if s[start] in the t, make the match invalid again
            if (tMap[s.charCodeAt(start)] ++ === 0) {
                counter ++;
            }
            start ++;
        }
    }
    return (minLen > s.length) ? "" : s.slice(minStart, minStart + minLen);
};

var testS = "ADOBECODEBANC";
var testT = "ADE";

console.log("Minimal window containing the target", testT, "is:",
            minWindow(testS, testT));
