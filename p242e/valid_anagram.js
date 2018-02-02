/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagramUnicode = function(s, t) {
    let sArray = s.split("");
    sArray.sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0));
    let tArray = t.split("");
    tArray.sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0));
    return sArray.join("") === tArray.join("");
};
var isAnagram = function(s, t) {
    let slen = s.length;
    if (slen !== t.length) { return false; }
    let signature = Array.from({length: 26}, (v) => 0);
    for (let i = 0; i < slen; ++i) {
        signature[s.charCodeAt(i) - 97] ++;
        signature[t.charCodeAt(i) - 97] --;
    }
    for (let i = 0; i < 26; ++i) {
        if (signature[i] !== 0) { return false; }
    }
    return true;
};

// TEST
[
    ["rat", "cat"],
    ["eat", "tea"],
    ["anagram", "nagaram"],
    ["成功", "功成"],
    ["成功", "功夫"],
].forEach(function (test) {
    console.log("Are", test[0], "and", test[1], "unicode anagram? ->",
                isAnagramUnicode(test[0], test[1]));
});
[
    ["rat", "cat"],
    ["eat", "tea"],
    ["anagram", "nagaram"],
].forEach(function (test) {
    console.log("Are", test[0], "and", test[1], "ascii anagram? ->",
                isAnagram(test[0], test[1]));
});
