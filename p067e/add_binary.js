/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let resultArray = Array.from(
        {length: Math.max(a.length, b.length)}, (v) => 0);
    let carry = 0;
    for (let ia = a.length - 1, ib = b.length - 1, ir = resultArray.length - 1;
         ia >= 0 || ib >= 0; --ia, --ib, --ir) {
        let bita = a.charAt(ia) === '1'? 1 : 0; // zero also if outofbound
        let bitb = b.charAt(ib) === '1'? 1 : 0;
        let add = bita + bitb + carry;
        resultArray[ir] = add % 2;
        carry = Math.floor(add / 2);
    }
    if (carry > 0) {
        return "1" + resultArray.join('');
    }
    else {
        return resultArray.join('');
    }
};

testArray = [
    ["11", "1"],
    ["10", "1010"],
    ["110", "10001"],
    ["111111", "1"]
];
testArray.forEach(function(val) {
    let sum = addBinary(...val);
    console.log(val[0], "+", val[1], "=", addBinary(...val),
                ", Test passed:",
                parseInt(val[0], 2) + parseInt(val[1], 2) === parseInt(sum, 2));
});
