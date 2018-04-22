/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let lo = 0, hi = s.length - 1;
    while (lo < hi) {
        if (s[lo].match(/[0-9a-zA-Z]/) === null) { 
            lo++;
        } else if (s[hi].match(/[0-9a-zA-Z]/) === null) {
            hi--;
        } else {
            if (s[lo].toLowerCase() !== s[hi].toLowerCase()) {
                return false;
            } 
            lo++; hi--;
        }
    }
    return true;
};
[
    "",
    "A man, a plan, a canal: Panama",
    "race a car",
    "0P",
].forEach(t => {
    console.log("Is \"" + t + "\" palindrome? ->",
                isPalindrome(t));
});
