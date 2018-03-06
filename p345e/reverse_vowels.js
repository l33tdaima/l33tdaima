/**
 * @param {string} s
 * @return {string}
 */
var reverseVowelsV1 = function(s) {
    let vowelsSet = new Set();
    ['a','e','i','o','u','A','E','I','O','U'].forEach(v => {
        vowelsSet.add(v);
    });
    let vowels = [];
    for (let i = 0, len = s.length; i < len; ++i) {
        if (vowelsSet.has(s.charAt(i))) {
            vowels.push(i);
        }
    }
    let output = s.split('');
    for (let i = 0, len = vowels.length; 2*i < len; ++i) {
        let tmp = output[vowels[i]];
        output[vowels[i]] = output[vowels[len - 1 - i]];
        output[vowels[len - 1 - i]] = tmp;
    }
    return output.join('');
};
var reverseVowelsV2 = function(s) {
    let output = s.split('');
    let hd = 0, tl = s.length - 1;
    let vowels = "aeiouAEIOU";
    while (hd < tl) {
        while (hd < tl && !vowels.includes(output[hd])) {
            hd ++;
        }
        while (hd < tl && !vowels.includes(output[tl])) {
            tl --;
        }
        let tmp = output[hd];
        output[hd++] = output[tl];
        output[tl--] = tmp;
    }
    return output.join('');
};
// TEST
[
    "",
    "a",
    "AeIoU",
    "hello",
    "HELLO",
    "leetcode",
].forEach(t => {
    console.log("Vowels reversed string", t, "->",
                reverseVowelsV2(t));
});
