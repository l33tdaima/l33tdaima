/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    // sort each string for signature
    var sigMap = {};
    for (let i = 0; i < strs.length; ++i) {
        let sig = [...strs[i]].sort().join('');
        if (sigMap[sig] === undefined) {
            sigMap[sig] = [strs[i]];
        }
        else {
            sigMap[sig].push(strs[i]);
        }
    }
    // grouping
    var grouping = [];
    for (var val in sigMap) {
        grouping.push(sigMap[val]);
    }
    return grouping;
};

var test = ["eat", "tea", "tan", "ate", "nat", "bat", "a", "a", "", ""];
console.log("Grouping results: \n", groupAnagrams(test));
