/**
 * @param {string} num
 * @return {boolean}
 */
const stroboMap = {
    "0": "0",
    "1": "1",
    "6": "9",
    "8": "8",
    "9": "6"
};
var isStrobogrammatic = function(num) {
    for (let l = 0, r = num.length - 1; l <= r; l++, r--) {
        if (stroboMap[num[l]] !== num[r]) {
            return false;
        }
    }
    return true;
};
// TEST
[
    ["0", true],
    ["1", true],
    ["", false],
    ["6", false],
    ["8", true],
    ["9", false],
    ["69", true],
    ["88", true],
    ["692", false],
].forEach(t => {
    console.log("Is", t[0], "strobogrammatic? ->", t[1]);
    console.assert(t[1] === isStrobogrammatic(t[0]));
})
