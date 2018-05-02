/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    // sort each string for signature
    var sigMap = new Map();
    for (let i = 0; i < strs.length; ++i) {
        let sig = [...strs[i]].sort().join('');
        let v = sigMap.get(sig);
        if (v === undefined) {
            sigMap.set(sig, [strs[i]]);
        } else {
            v.push(strs[i]);
            sigMap.set(sig, v);
        }
    }
    // grouping
    var grouping = [];
    sigMap.forEach( v => {
        grouping.push(v);
    });
    return grouping;
};

[
    ["eat", "tea", "tan", "ate", "nat", "bat", "a", "a", "", ""]
].forEach(t => {
    console.log("Grouping results ->\n", groupAnagrams(t));
});
