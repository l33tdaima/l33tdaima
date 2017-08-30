/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    if (n === undefined || isNaN(n) || typeof(n) !== "number") {
        return undefined; 
    }
    // console.log("n=", n);
    if (n === 0) {
        return "";
    }
    if (n === 1) {
        return "1";
    }
    let prev = countAndSay(n-1);
    // console.log("say=", prev);
    let curr = "";
    for (let i = 0, count = 1; i < prev.length; ++i) {
        c = prev.charAt(i);
        if (c === prev.charAt(i+1)) { // when out of bound, hence undefined, will print the last count
            count ++;
        }
        else {
            curr = curr + (count + c);
            count = 1;
        }
    }
    return curr;
};

console.log("Count and Say of", process.argv[2], ":",
            countAndSay(parseInt(process.argv[2])));
