/** Functional style
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
    var num1Array = num1.split('').map(function(v) { return parseInt(v); });
    var num2Array = num2.split('').map(function(v) { return parseInt(v); });

    /** Multiply an array of digits to a single digit
     * @param {char []} numArray
     * @param {number} digit 0-9
     * @return {char []}
     */
    var multiplyNumByDigit = function(numArray, digit) {
        var res = new Array(numArray.length);
        var msd = numArray.reduceRight(function(carry, val, i) {
            let prod = val * digit + carry; // ie. 9*9+8 (carry from the previous 9*9)
            res[i] = prod % 10;
            return ~~(prod / 10);
        }, 0);
        return (msd === 0) ? res: [msd].concat(res);
    };

    var add2Num = function(n1Array, n2Array) {
        let offset = n1Array.length - n2Array.length;
        if (offset > 0) {
            n2Array = Array.from({length: offset}, (v) => 0).concat(n2Array);
        }
        else if (offset < 0) {
            n1Array = Array.from({length: -offset}, (v) => 0).concat(n1Array);
        }
        let res = new Array(n1Array.length);
        let carry = 0;
        for (let i = res.length - 1; i >= 0; --i) {
            let sum = n1Array[i] + n2Array[i] + carry;
            res[i] = sum % 10; 
            carry = ~~(sum / 10);
        }
        if (carry > 0) {
            return [carry].concat(res);
        }
        else {
            return res;
        }
    };

    // The main iteration
    let n2len = num2Array.length;
    let prodArray = num2Array.reduceRight(function(sumArray, digit, i) {
        let prod = multiplyNumByDigit(num1Array, digit).concat(
            Array.from({length: n2len-1-i}, (v) => 0));
        // console.log("digit:", digit, "prod:", prod);
        let sum = add2Num(sumArray, prod);
        // console.log("digit:", digit, "sum:", sum);
        return sum;
    }, []);
    // remove leading zeros
    while(prodArray[0] === 0 && prodArray.length > 1) {
        prodArray.shift();
    }
    return prodArray.join("");
};

/** Imperative style
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiplyImp = function(num1, num2) {
    let num1Array = Array.from(num1, (v) => parseInt(v));
    let num2Array = Array.from(num2, (v) => parseInt(v));

    // accumulated result
    let resultArray = Array.from(
        {length: num1Array.length + num2Array.length}, (v) => 0); 
    for (let i2 = num2Array.length - 1; i2 >= 0; --i2) {
        let digit = num2Array[i2];
        let prodCarry = 0;
        let sumCarry = 0;
        for (let i1 = num1Array.length - 1; i1 >= 0; --i1) {
            let prod = digit * num1Array[i1] + prodCarry;
            prodCarry = ~~(prod / 10);
            let i = i2 + 1 + i1;
            let sum = resultArray[i] + prod % 10 + sumCarry;
            sumCarry = ~~(sum / 10);
            resultArray[i] = sum % 10;
        }
        resultArray[i2] = prodCarry + sumCarry;
    }
    // remove leading zeros
    /*
    while(resultArray[0] === 0 && resultArray.length > 1) {
        resultArray.shift();
    }*/
    return resultArray.join("");
}

var num1 = process.argv[2];
var num2 = process.argv[3];
var prodfun = multiply(num1, num2);
var prodimp = multiplyImp(num1, num2);
console.log("Multiply", num1, "by", num2, "=", prodimp, ", Test passed?",
            (prodfun === prodimp));
