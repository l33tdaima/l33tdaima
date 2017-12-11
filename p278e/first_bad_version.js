/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 */
isBadVersion = function(version) {
    return version > 15;
};

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let start = 1, end = n;
        while (start + 1 < end) {
            let mid = ~~((start + end) / 2);
            if (isBadVersion(mid)) {
                end = mid;
            } else {
                start = mid;
            }
        }
        return isBadVersion(start) ? start : end;
    };
};
// TEST
console.log("The first bad version ->", solution(isBadVersion)(34));
