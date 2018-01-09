/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    console.assert(s.length === t.length);

    let stot = Array.from({length: 256}, (v) => -1);
    let ttos = Array.from({length: 256}, (v) => -1);
    for (let i = 0, len = s.length; i < len; ++i) {
        let charS = s.charCodeAt(i), charT = t.charCodeAt(i);
        if (stot[charS] !== ttos[charT]) return false;
        stot[charS] = ttos[charT] = i;
    }
    return true;
};
// TEST
[
    ["ab", "aa"],
    ["add", "egg"],
    ["foo", "bar"],
    ["paper", "title"],
].forEach(function (test) {
    console.log(test[0], "and", test[1], "are isomorphic ->", 
                isIsomorphic(test[0], test[1]));
});
