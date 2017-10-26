/**
 * @param {number} num
 * @return {string[]}
 */
var readBinaryWatch = function(num) {
    var bitCount = function(n) {
        let count = 0;
        let bin = n;
        while (bin) {
            // O(n) algorithm which check each bit
            // count += bin & 1;
            // bin = bin >>> 1;

            // Brian Kernighan’s Algorithm which only counts set bits
            bin &= (bin - 1);
            count++;
        }
        return count;
    };

    var times = new Array();
    for (let h = 0; h <= 11; ++h) {
        for (let m = 0; m <= 59; ++m) {
            // console.log("h:m = ", bitCount(h), bitCount(m));
            if ((bitCount(h) + bitCount(m)) === num) {
                times.push( h.toString() + ":" +
                           (m<10 ? "0" + m.toString() : m.toString()) );
            }
        }
    }
    return times;
};

var n = process.argv[2] === undefined ? 0 : process.argv[2];
console.log(readBinaryWatch(parseInt(n)));
