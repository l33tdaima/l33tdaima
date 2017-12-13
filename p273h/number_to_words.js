const LessThan20 = [
    "", "One", "Two", "Three", "Four", "Five",
    "Six", "Seven", "Eight", "Nine", "Ten", 
    "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen",
    "Sixteen", "Seventeen", "Eighteen", "Nineteen"
];
const Tens = [
    "", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"
];
const Thousands = [
    "", "Thousand", "Million", "Billion"
];
/** convert the number less than 1,000
 */
var convertWithinThousand = function (num) {
    if (num < 20) {
        return LessThan20[num];
    } else if (num < 100) {
        return Tens[~~(num / 10)] + " " + LessThan20[num % 10];
    } else {
        return LessThan20[~~(num / 100)] + " Hundred " + convertWithinThousand(num % 100);
    }
};
/**
 * @param {number} num
 * @return {string}
 */
var numberToWords = function (num) {
    if (num === 0) { return "Zero"; }
    let words = "", unit = 0;
    while (num > 0) {
        // should we bypass unit
        if (num % 1000 !== 0) {
            words = convertWithinThousand(num % 1000).trim() + " " + Thousands[unit] + " " + words;
        } 
        num = ~~(num / 1000);
        unit ++;
    }
    return words.trim();
};
// TEST
[
    0, 4, 12, 25, 40, 67, 512, 700, 806, 999,
    1000, 2002, 3017, 4875, 5107, 50868, 66200, 434901,
    2000000, 3010203, 49281309,
    1000000000, 1000000005,
].forEach(function (test) {
    console.log(test.toString(), "-> \"" + numberToWords(test) + "\"");
});
