var isValidRegex = function (p) {
    for (let j = p.length - 1; j >= 0; --j) {
        if (p[j] === '*') {
            if (j === 0 || p[j-1] === '*') {
                return false;
            }
        }
    }
    return true;
}

/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
    // otherwise a validator function will be written seperately
    if (!isValidRegex(p)) {
        throw "Invalid RegEx:" + p;
    }

    // Create DP transition matrix
    var tMtx = new Array(s.length+1);
    for (let i = 0; i < tMtx.length; ++i) {
        tMtx[i] = new Array(p.length+1);
        tMtx[i][0] = (i === 0);
    }
    tMtx[0][1] = false;
    for (let j = 1; j < p.length; ++j) {
        tMtx[0][j+1] = (p[j] === '*' && tMtx[0][j-1]);
    }
    for (let i = 0; i < s.length; ++i) {
        for (let j = 0; j < p.length; ++j) {
            if (p[j] === '.' || p[j] === s[i]) {
                tMtx[i+1][j+1] = tMtx[i][j]; // last char 1-on-1 match
            } else if (p[j] === '*') {
                if (p[j-1] !== s[i] && p[j-1] !== '.') {
                    tMtx[i+1][j+1] = tMtx[i+1][j-1]; // a* counts as empty
                } else {
                    tMtx[i+1][j+1] = tMtx[i][j+1] || // a* counts many a
                                     tMtx[i+1][j] || // a* counts single a
                                     tMtx[i+1][j-1]; // a* counts empty
                }
            } else {
                tMtx[i+1][j+1] = false;
            }
        }
    }
    //console.log(tMtx);
    return tMtx[s.length][p.length];
};

var tests = [
    ["aa", "a"],
    ["aa", "aa"],
    ["aaa", "aa"],
    ["aa", "a*"],
    ["aa", ".*"],
    ["ab", ".*"],
    ["aab", "c*a*b"],
    ["ab", ".*c"],
    ["aaa", "ab*a"]
];
tests.forEach(function(val) {
    console.log(val[0] + ", /" + val[1] + "/ : " + isMatch(val[0], val[1]));
}, this);
