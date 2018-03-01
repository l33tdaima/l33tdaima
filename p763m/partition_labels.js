/**
 * @param {string} S
 * @return {number[]}
 */
var partitionLabelsV1 = function(S) {
    let result = [];
    // occurence indices of each letter
    let dupMap = Array.from({length: 26}, (v) => []); 
    let len = S.length;
    for (let i = 0; i < len; ++i) {
        dupMap[S.charCodeAt(i) - 97].push(i);
    }
    //dupMap.forEach((v, i) => console.log(String.fromCharCode(i + 97), v));

    let cutStart = -1, cutEnd = -1;
    for (let i = 0; i < len; ++i) {
        let dup = dupMap[S.charCodeAt(i) - 97];
        if (i === dup[0]) {
            if (cutStart >= 0) { // except the beginning
                result.push(cutEnd - cutStart + 1);
            }
            cutStart = i;
        }
        cutEnd = dup[dup.length - 1]; 
        // jump to the furthest point of duplication
        for (let j = i + 1; j < cutEnd; ++j) {
            let mdup = dupMap[S.charCodeAt(j) - 97];
            cutEnd = Math.max(cutEnd, mdup[mdup.length - 1]);
        }
        i = cutEnd;
    }
    result.push(cutEnd - cutStart + 1);
    return result;
};
var partitionLabelsV2 = function(S) {
    let result = [];
    let len = S.length;
    // the index of last occurrence of each letter
    let lastOccurs = Array.from({length: 26}, (v) => -1);
    for (let i = 0; i < len; ++i) {
        lastOccurs[S.charCodeAt(i) - 97] = i;
    }
    let start = 0, last = -1;
    for (let i = 0; i < len; ++i) {
        last = Math.max(last, lastOccurs[S.charCodeAt(i) - 97]);
        if (i === last) {
            result.push(last - start + 1);
            start = i + 1;
        }
    }
    return result;
};
// TEST
[
    "abc",
    "abca",
    "zzcbzchfihi",
    "abcdaefghijek",
    "ababcbacadefegdehijhklij",
    "qiejxqfnqceocmy",
].forEach((test) => {
    console.log("Partition labels of", test, "->",
                partitionLabelsV2(test));
});
