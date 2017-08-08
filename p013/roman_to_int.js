/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    var valueMap = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    var result = 0;
    for(var i = 0; i < s.length; ++i) {
        if(i + 1 < s.length && valueMap[s.charAt(i+1)] > valueMap[s.charAt(i)]) {
                result += valueMap[s.charAt(i+1)] - valueMap[s.charAt(i)];
                ++i;
        }
        else {
            result += valueMap[s.charAt(i)];
        }
    }
    return result;
};

console.log("Roman I = " + romanToInt("I"));
console.log("Roman II = " + romanToInt("II"));
console.log("Roman VII = " + romanToInt("VII"));
console.log("Roman XXV = " + romanToInt("XXV"));
console.log("Roman LXXXVIII = " + romanToInt("LXXXVIII"));
console.log("Roman XCIX = " + romanToInt("XCIX"));
console.log("Roman DCCCXC = " + romanToInt("DCCCXC"));
console.log("Roman MDCCC = " + romanToInt("MDCCC"));