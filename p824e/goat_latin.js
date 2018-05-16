/**
 * @param {string} S
 * @return {string}
 */
var toGoatLatin = function(S) {
    let isVowel = function (c) {
        return c === 'a' || c === 'e' || c === 'i' || c === 'o' || c === 'u' ||
               c === 'A' || c === 'E' || c === 'I' || c === 'O' || c === 'U';
    };
    let ans = "";
    let postfix = "a";
    let wordList = S.split(' ');
    for (let [i, word] of wordList.entries()) {
        if (word.length === 0) { continue; }
        let glword = "";
        if (isVowel(word[0])) {
            glword += word + "ma";
        } else {
            glword += word.substr(1) + word[0] + "ma";
        }
        glword += postfix;
        postfix += "a";
        ans += glword;
        ans += (i === wordList.length - 1) ? "":" ";
    }
    return ans;
};
// TEST
[
    "",
    "a",
    "I speak Goat Latin",
    "The quick brown fox jumped over the lazy dog",
].forEach(t => {
    console.log(t, "->", toGoatLatin(t));
});