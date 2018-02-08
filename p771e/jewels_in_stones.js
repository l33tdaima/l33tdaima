/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
    let jewels = Array.from({length: 122 - 65}, (v) => false);
    for (let i = J.length - 1; i >=0; --i) {
        jewels[J.charCodeAt(i) - 65] = true;
    }
    let count = 0;
    for (let i = S.length - 1; i >=0; --i) {
        if (jewels[S.charCodeAt(i) - 65]) {
            count ++;
        }
    }
    return count;
};
// TEST
[
    ["z", "ZZ"],
    ["aA", "aAAbbbb"],
].forEach(function (test) {
    console.log("# of jewels", test[0], " in stones", test[1], "->",
                numJewelsInStones(test[0], test[1]));
});
