/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const valueMap = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };
    let result = 0, i = 0;
    while (i < s.length) {
        let curr = valueMap[s[i]];
        let next = (i + 1 < s.length) ? valueMap[s[i + 1]] : 0;
        if (curr < next) {
            result += next - curr;
            i += 2;
        }
        else {
            result += curr;
            i += 1;
        }
    }
    return result;
};
// TESTS
[
    ["III", 3],
    ["IV", 4],
    ["VII", 7],
    ["IX", 9],
    ["LVIII", 58],
    ["XCIX", 99],
    ["DCCCXC", 890],
    ["MCMXCIV", 1994],
].forEach(t => {
    console.log("Roman", t[0], "to int ->",
                romanToInt(t[0]), romanToInt(t[0]) === t[1]);
});
