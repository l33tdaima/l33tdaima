/**
 * Definition for read4()
 * 
 * @param {character[]} buf Destination buffer
 * @return {number} The number of characters read
 */
// var file = "abc".split("");
var file = "1234567890".split("");
var p = 0;
var read4 = function(buf) {
    let i = 0;
    while (p < file.length && i < 4) {
        buf[i++] = file[p++];
    }
    return i;
};

/**
 * @param {function} read4()
 * @return {function}
 */
var solution = function(read4) {
    let ibuf4 = 4;
    let buf4 = [];
    let nread = 0;
    /**
     * @param {character[]} buf Destination buffer
     * @param {number} n Maximum number of characters to read
     * @return {number} The number of characters read
     */
    return function(buf, n) {
        // read from leftover from last time
        let ibuf = 0;
        while (ibuf4 < nread && ibuf < n) {
            buf[ibuf++] = buf4[ibuf4++];
        }
        let eof = false;
        // now we need new read from file
        while (!eof && ibuf < n) {
            // read up to 4 from file
            nread = read4(buf4);
            ibuf4 = (nread === 0) ? 4 : 0;
            eof = nread < 4;
            // copy the buffers
            let nc = Math.min(nread, n - ibuf);
            while (ibuf4 < nc) {
                buf[ibuf++] = buf4[ibuf4++];
            }
        }
        return ibuf;
    };
};
// TEST
// each number below basically read continously from file, to start over re-run the program
let sol = solution(read4);
[
    // 3,4
    // 1,4,1
    0,1,3,5,2,1
].forEach(t => {
    let buf = [];
    console.log("Reading", t, "from file ->", sol(buf, t));
    console.log("Buffer read ->", buf);
});
