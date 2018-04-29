/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    var stack = new Array(0);
    for(var i = 0; i < s.length; ++i) {
        var ch = s.charAt(i);
        if(ch === '(' || ch === '[' || ch === '{') {
            stack.push(ch);
        }
        if(ch === ')' && stack.pop() !== '(') {
            return false;
        }
        if(ch === ']' && stack.pop() !== '[') {
            return false;
        }
        if(ch === '}' && stack.pop() !== '{') {
            return false;
        }
    }
    return (stack.length === 0);
};
// TEST
[
    "{}",
    "()[]{}",
    "(]",
    "([)]",
    "{[]}",
].forEach(t => {
    console.log("Parenthese: '" + t + "' is valid? ->", isValid(t));
});
