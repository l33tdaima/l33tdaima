/**
 * @param {string} S
 * @param {character} C
 * @return {number[]}
 */
var shortestToChar = function(S, C) {
    let len = S.length;
    let matched = [Number.MIN_SAFE_INTEGER];
    let ans = Array.from({length: len}, v => 0);
    
    for (let i = 0; i < len; ++i) {
        if (S[i] === C) { matched.push(i); }
    }
    matched.push(Number.MAX_SAFE_INTEGER);
    for (let i = 0, j = 0; i < len; ++i) {
        ans[i] = Math.min(i - matched[j], matched[j+1] -i);
        if (i === matched[j+1]) { j++; }
    }
    return ans;
};
var shortestToCharV2 = function(S, C) {
    let len = S.length;
    let ans = Array.from({length: len}, v => Number.MAX_SAFE_INTEGER);
    for (let i = 0, prev = -1; i < len; ++i) {
        if (S[i] === C) { prev = i; }
        if (prev >= 0) {
            ans[i] = Math.min(ans[i], i - prev);
        }
    }
    for (let i = len - 1, prev = -1; i >= 0; --i) {
        if (S[i] === C) { prev = i; }
        if (prev >= 0) {
            ans[i] = Math.min(ans[i], prev - i);
        }
    }
    return ans;
};
// TESTS
[
    ["loveleetcode", 'e'],
    ["loveleetcode", 'v'],
    ["vvvvvvv", 'v'],
].forEach(t => {
    console.log("Shortest distance to '" + t[1] + "' in '" + t[0] + "' ->",
                shortestToCharV2(t[0], t[1]));
});