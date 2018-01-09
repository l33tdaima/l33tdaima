/**
 * @param {string} s
 * @return {boolean}
 */
var isNumberRegex = function(s) {
    return null !== s.match(
        /^\s*[-+]?(([0-9]+(\.[0-9]*)?)|\.[0-9]+)(e[-+]?[0-9]+)?\s*$/);
};
var isNumber = function(s) {
    if (s == null) return false;
    s = s.trim();
    if (s.length === 0) return false;

    let seenNum = false, seenE = false, seenD = false;
    
    for (let i = 0, len = s.length; i < len; ++i) {
        let c = s.charAt(i);
        switch(c) {
            case '.':
                if (seenD || seenE) return false;
                seenD = true;
                break;
            case 'e':
                if (seenE || !seenNum) return false;
                seenE = true;
                seenNum = false;
                break;
            case '+':
            case '-':
                if (i !== 0 && s.charAt(i-1) !== 'e') return false;
                seenNum = false;
                break;
            default:
                let cc = s.charCodeAt(i);
                if (cc - 48 < 0 || cc - 48 > 9) return false;
                seenNum = true;
        }
    }
    return seenNum;
};
// TEST
[
    ["123", true], 
    [" 123 ", true],
    [" 0 ", true],
    [" 0123 ", true],
    [" 00", true],
    [" -10", true],
    [" -0", true],
    ["123.5", true],
    ["123.0000", true],
    ["-500.777", true],
    ["0.0000001", true],
    ["0.00000", true],
    ["0.", true],  
    ["00.5", true],
    ["123e1", true],
    ["1.23e10", true],
    ["0.5e-10", true],
    ["1.0e4.5", false],
    ["0.5e04", true],
    ["12 3", false],
    ["1a3", false],
    ["", false],
    ["     ", false],
    [".1", true],
    [".", false],
    ["2e0", true],
    ["+.8", true],  
    [" 005047e+6", true],
].forEach(function (test) {
    console.assert(isNumber(test[0]) === test[1]);
    console.log("\"" + test[0] + "\" passed test"); 
});
